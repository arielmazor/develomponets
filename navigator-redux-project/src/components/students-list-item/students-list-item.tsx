import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentsContext from 'providers/students/students.context';
import { connect } from 'react-redux';
import { IState } from 'store/store';
import { IStudent } from 'store/students/students.types'
import './_students-list-item.scss';

function ListItem(props: any) { 
  const navigate = useNavigate();
  const studentsProvider = useContext(studentsContext);
  const [student, setStudent] = useState(props.getStudent(props.id));

  return (
    <div className="list-item" key={props.id}> 
      <div className="wrap">
        <div>{student && student.name}</div>
        <div>{student && student.desc}</div>
      </div>      
      <div className="delete-btn f-c"onClick={() => studentsProvider.deleteStudent(props.id)}>
      <svg width="20" height="20" viewBox="0 0 24 24" className="NSy2Hd cdByRd RTiFqe undefined"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
      </div>
      <div onClick={() => navigate(`/students/${props.id}/profile`)} className="popper"></div>
  </div>
  )
};

function mapStateToProps(state: IState) {
  return {
    getStudent: (id: string): IStudent | undefined => {
      return state.students.find((student: IStudent) => student.id === id);    
   }
  };
}

export default connect(mapStateToProps)(ListItem);