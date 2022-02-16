import React from 'react';
import ReactDOM from 'react-dom';
import './_Student.scss';
import { useNavigate } from'react-router-dom';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../store/reducers/template/actions.creators';
import { IState } from "../../store";
import { IProfile } from '../../store/reducers/template/types';
import { IStudent, IStudentProps } from '../../store/reducers/students/types';


const Student = (props: IStudentProps) => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate();
  const student: IStudent | undefined = useSelector((state: IState) => {
    return state.students.find(item => {
      return item.id === props.id;
    })
  });


  return ( 
    <React.Fragment>
      <div className="name">{student && student.name}</div>
    </React.Fragment> 
  );

}

export default Student;