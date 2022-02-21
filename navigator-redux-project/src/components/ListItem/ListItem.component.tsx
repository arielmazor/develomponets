import React, { useState } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { deleteStudent } from 'store/Reducers/Student/actions';
import { IState } from 'store';
import { IStudent } from 'store/Reducers/Students/types'

function ListItem(props: any) { 
  const [student, setStudent] = useState(props.GetStudent(props.id));

  return (
    <div> 
      <div>{student.name}</div>
      <button onClick={() => props.handleDelete(student.id)}>Delete</button>
  </div>
  )
}

function mapStateToProps(state: IState) {
  return {
    GetStudent: (studentId: number) => state.students.find((student: IStudent) => {
      return student.id == studentId;
    }),
    student: {},
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    handleDelete: deleteStudent,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);