import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentsContext } from 'providers/students.provider';
import { connect } from 'react-redux';
import { IState } from 'store/store';
import { IStudent } from 'store/students/students.types'
import './_students-list-item.scss';
import { deleteStudentAction } from 'store/students/students.actions';
import { bindActionCreators } from 'redux';
import TrashSvg from 'shared/components/svgs/trash.svg';

function ListItem(props: any) { 
  const navigate = useNavigate();
  const [student, setStudent] = useState(props.getStudent(props.id));

  return (
    <div className="list-item" key={props.id}> 
      <div className="wrap">
        <div>{student && student.name}</div>
        <div>{student && student.desc}</div>
      </div>      
      <div className="delete-btn f-c"onClick={() => props.deleteStudent(props.id)}>
        <TrashSvg />      
      </div>
      <div onClick={() => navigate(`/students/${props.id}/tests`)} className="popper"></div>
  </div>
  )
};

function mapStateToProps(state: IState) {
  return {
    getStudent: (id: string): IStudent => {
      return state.students.find((student: IStudent) => student.id === id);    
   }
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      deleteStudent: deleteStudentAction,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);