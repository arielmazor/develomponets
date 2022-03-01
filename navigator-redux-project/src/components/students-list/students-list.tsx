import { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IState } from 'store/store';
import Loading from 'shared/components/loading/loading';
import { IStudent } from 'store/students/students.types';
import ListItem from '../students-list-item/students-list-item';
import usersContext from 'providers/students/students.context';
import './_students-list.scss';

function List(props: any) {
  const studentsProvider = useContext(usersContext);
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
      <div className="f-c add-btn" onClick={() => studentsProvider.addStudent}>Add</div>
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

export default connect(mapStateToProps)(List);