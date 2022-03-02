import { createContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { IState } from 'store/store';
import { IStudent } from 'store/students/students.types';
import { addStudentAction, deleteStudentAction, updateStudentAction, initDataAction } from 'store/students/students.actions';
import { useState } from 'react';

export const studentsContext = createContext(null);

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
    <studentsContext.Provider value={{
      fetchData: fetchData,
      isStudentExist: isStudentExist,
    }}>
      {props.children}  
    </studentsContext.Provider>
  )
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      initData: initDataAction,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(StudentsProvider);