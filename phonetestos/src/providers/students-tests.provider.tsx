import { createContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { IState } from 'store/store';
import { IStudent } from 'store/students/students.types';
import { initDataAction } from 'store/student-tests/student-tests.action';
import { useState } from 'react';
import { IStudentsTests, ITest } from 'store/student-tests/student-tests.types';

export const studentsTestsContext = createContext(null);

const urls: any = {
  "1": "https://api.jsonbin.io/b/6220c08da703bb674920ef63",
  "2": "https://api.jsonbin.io/b/621f136906182767436b3913/3",
  "3": "https://api.jsonbin.io/b/6220c0b0a703bb674920ef74"
};

function StudentsTestsProvider(props: any) {

  //----------------------
  // FetchData
  //----------------------

  async function fetchData(id: string): Promise<any> {
    if(!props.isFetched(id)) {
      const url: string = urls[id];
      const fetchRes = await fetch(url);
      const data: IStudentsTests = await fetchRes.json();
      
      props.initData(Object.values(data)[0], id);
    };
  }
  
  return (
    <studentsTestsContext.Provider value={{
      fetchData,
    }}>
      {props.children}  
    </studentsTestsContext.Provider>
  )
}

function mapStateToProps(state: IState){
  return {
    isFetched: (id: string): boolean => state.studentsTests[id] !== undefined,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      initData: initDataAction,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsTestsProvider);