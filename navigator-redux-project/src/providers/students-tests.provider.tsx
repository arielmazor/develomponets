import { createContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { IState } from 'store/store';
import { IStudent } from 'store/students/students.types';
import { initDataAction } from 'store/student-tests/student-tests.action';
import { useState } from 'react';
import { IStudentsTests } from 'store/student-tests/student-tests.types';

export const studentsTestsContext = createContext(null);

function StudentsTestsProvider(props: any) {
  const [isFetched, setIsFetched] = useState(false);
  const students = useSelector((state: IState) => state.students);

  //----------------------
  // FetchData
  //----------------------

  async function fetchData(): Promise<any> {
    if(!isFetched) {
      const url: string = "https://api.jsonbin.io/b/621f136906182767436b3913/1";
      const fetchRes = await fetch(url);
      const data: IStudentsTests = await fetchRes.json();
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
    <studentsTestsContext.Provider value={{
      fetchData,
    }}>
      {props.children}  
    </studentsTestsContext.Provider>
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

export default connect(null, mapDispatchToProps)(StudentsTestsProvider);