import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteStudent } from 'store/reducers/students/students.actions';
import { IState } from 'store/store';
import { IStudent } from 'store/reducers/students/students.types'
import './_viewer.scss';

export function Viewer(props: any) { 
  const [student, setStudent] = useState(props.GetStudent(props.id));

  return (
    <div className="viewr-wrapper" key={student.id}> 
      <div className="wrap">
        <div>{student.name}</div>
        <div>{student.desc}</div>
      </div>      
      <div className="delete-btn f-c"onClick={() => props.handleDelete(student.id)}>
      <svg width="20" height="20" viewBox="0 0 24 24" className="NSy2Hd cdByRd RTiFqe undefined"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
      </div>
  </div>
  )
}

function mapStateToProps(state: IState) {
  return {
    GetStudent: (studentId: number) => state.students.find((student: IStudent) => {
      return student.id == studentId;
    }),
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    handleDelete: deleteStudent,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);