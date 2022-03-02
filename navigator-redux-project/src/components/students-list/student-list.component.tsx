import { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IState } from 'store/store';
import Loading from 'shared/components/loading/loading';
import { IStudent } from 'store/students/students.types';
import ListItem from '../students-list-item/student-list-item.component';
import { studentsContext } from 'providers/students/students.provider';
import './_students-list.scss';
import { bindActionCreators } from 'redux';
import { addStudentAction } from 'store/students/students.actions';

function List(props: any) {
  const studentsProvider = useContext(studentsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    fetchingListData()
      .catch(err => console.error(err));
  },[]);

  //-------------------------
  //Fetch List Data
  //-------------------------

  async function fetchingListData(){
    await studentsProvider.fetchData();
    setIsLoading(false);
  };  
  return (
    <>
    { isLoading && (<Loading />)}
    <div className="list-container"> 
      <div>
      <h1> students </h1>
      <div className="list">
      {props.students.map((student: IStudent) => {
        return <ListItem key={student.id} id={student.id} />
      })}
      </div>
      <div className="f-c add-btn" onClick={() => props.addStudent}>Add</div>
      </div>
    </div>
    </>
  )
};

function mapStateToProps(state: IState) {
  return {
    students: state.students 
   }
};

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      addStudent: addStudentAction,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(List);