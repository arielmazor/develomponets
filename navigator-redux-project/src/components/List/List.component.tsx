import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './_List.scss';
import { useNavigate } from'react-router-dom';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { IStudent } from 'store/Reducers/Students/types';
import StudentsContext from 'Providers/Students/Students.context';

const HomeContext = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate();
  const { GetStudents } = useContext(StudentsContext);
  GetStudents();
  return ( 
    <React.Fragment>
      <button> Increase </button>
    </React.Fragment> 
  );

}

export default HomeContext;


