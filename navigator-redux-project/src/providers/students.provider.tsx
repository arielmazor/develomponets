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

  function timeout(ms: number):Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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
  // Add student
  //----------------------

  async function addStudent(): Promise<any> {
    props.addStudentDispatch(getLatestId());    
    await timeout(1000);
  }
  
  //----------------------
  // get latest id
  //----------------------

  function getLatestId(): string{
    let id = 0
    students.forEach((student: IStudent) => {
     if(parseInt(student.id) > id){
       id = parseInt(student.id);
      }
    });
    id++;
    return id.toString();
  }

  //----------------------
  // update student
  //----------------------

  async function updateStudent(student: IStudent){
    await timeout(1000)
    props.updateStudentDispatch(student);
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
      addStudent,
      updateStudent
    }}>
      {props.children}  
    </studentsContext.Provider>
  )
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      initData: initDataAction,
      addStudentDispatch: addStudentAction,
      updateStudentDispatch: updateStudentAction
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(StudentsProvider);