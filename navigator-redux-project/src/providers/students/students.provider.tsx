import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import usersContext from './students.context';
import { IState } from 'store/store';
import { IStudent } from 'store/students/students.types';
import { addStudentAction, deleteStudentAction, updateStudentAction, initDataAction } from 'store/students/students.actions';
import { useState } from 'react';

function StudentsProvider(props: any) {
  const [isFetched, setIsFetched] = useState(false);
  const students = useSelector((state: IState) => state.students);

  //----------------------
  // FetchData
  //----------------------

  async function fetchData(): Promise<any> {
    if(!isFetched) {
      const url: string = "https://api.jsonbin.io/b/6214f8d2ca70c44b6ea550c5/2";
      const fetchRes = await fetch(url);
      const data: IStudent[] = await fetchRes.json();
      setIsFetched(true);
      props.initData(data);
    };

    return;
  }
  
  //----------------------
  // isStudentExist
  //----------------------
  
  function isStudentExist(id: string): boolean {
    return id !== undefined && students.find((student: IStudent) => student.id == id) !== undefined;
  }
  
  return (
    <usersContext.Provider value={{
      fetchData: fetchData,
      deleteStudent: props.deleteStudent,
      updateStudent: props.updateStudent,
      addStudent: props.addStudent,
      isStudentExist: isStudentExist,
      students: props.students,
    }}>
      {props.children}  
    </usersContext.Provider>
  )
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      deleteStudent: deleteStudentAction,
      updateStudent: updateStudentAction,
      addStudent: addStudentAction,
      initData: initDataAction,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(StudentsProvider);