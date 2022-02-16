import React from 'react';
import ReactDOM from 'react-dom';
import './_List.scss';
import { useNavigate } from'react-router-dom';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../store/reducers/template/actions.creators';
import { IState } from "../../store";
import { IProfile } from '../../store/reducers/template/types';
import { IStudent } from '../../store/reducers/students/types';
import Student from '../student/Student.component';


const List = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate();
  const students: IStudent[] = useSelector((state: IState) => state.students);

  return ( 
    <React.Fragment>
     <div className="list">
        {students.map((student: IStudent) => {
          return <Student key={student.id} id={student.id} />
        })}
     </div>
    </React.Fragment> 
  );

}

export default List;