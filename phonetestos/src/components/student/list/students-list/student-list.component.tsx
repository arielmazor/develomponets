import { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IState } from 'store/store';
import { IStudent } from 'store/students/students.types';
import { studentsContext } from 'providers/students.provider';
import Loading from 'store/shared/components/loading-main/loading';
import ListItem from '../students-list-item/student-list-item.component';
import Navbar from 'components/navbar/navbar.component';
import './_students-list.scss';

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

  function addStudent(){
    studentsProvider.addStudent()
      .then(() => console.log("great"))
      .catch((err: any) => console.error(err))
  } 

  return (
    <>
    { isLoading && (<Loading />)}
      <div className="list">
      {props.students.map((student: IStudent) => {
        return <ListItem key={student.id} id={student.id} />
      })}
      </div>
    <Navbar />  
    </>
  )
};

function mapStateToProps(state: IState) {
  return {
    students: state.students 
   }
};

export default connect(mapStateToProps)(List);