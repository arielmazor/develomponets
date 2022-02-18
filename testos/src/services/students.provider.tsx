import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

interface IStudentsService {
  getStudents: any,
}

type IStudentService = { 
  children: JSX.Element[] | JSX.Element,
}

const StudentsCtx = React.createContext<IStudentsService | null>(null);

const StudentsService = ({ children }: IStudentService) => {

  const GetStudents = (callback) => {
    dispatch(initStudentsData())
    callback();
  }

  return(
    <StudentsCtx.Provider value={GetStudents}>
      {children}
    </StudentsCtx.Provider>
  )
}