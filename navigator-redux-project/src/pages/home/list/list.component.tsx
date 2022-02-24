import { useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStudent, initData } from 'store/reducers/students/students.actions';
import { IState } from 'store/store';
import { IStudent } from 'store/reducers/students/students.types';
import ListItem from '../listItem/listItem.component'
import { useEffect, useState } from 'react';
import StudentsContext from 'providers/students/students.context';
import Loading from 'common/loading/loading';
import Viewer from 'common/viewer/viewer';
import './_list.scss';

interface IViewerOpt {
  id: number,
  show: boolean,
}

const List = (props: any) => {
  const studentsProvider = useContext(StudentsContext);  
  const [isLoading, setIsLoading] = useState(true);
  const [viewerOpt, setViewerOpt] = useState({id:-1, show:false});

  useEffect(()=> {
    fetchingListData()
      .catch(err => console.error(err));
  },[]);

  //-------------------------
  //Fetch List Data
  //-------------------------

  async function fetchingListData(){
    const fetchRes = await studentsProvider.fetchData();
    const data = await fetchRes.json();
    props.initData(data);
    setIsLoading(false);
  };  
  
  return (
    <div> 
      {isLoading ? (
      <div><Loading /></div>
      ) : (
        <div>
          <h1> Students </h1>
          <div className="list">
            {props.students.map((student: IStudent) => {
            return <ListItem setViewerOpt={setViewerOpt} key={student.id} id={student.id} />
            })}
          </div>
          <div className="f-c add-btn"onClick={props.handleIncrease}>+</div>
          {viewerOpt.show && <Viewer id={viewerOpt.id} />}
        </div>
      )}
    </div>
  )
}

function mapStateToProps(state: IState) {
  return {
    students: state.students,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    handleIncrease: addStudent,
    initData: initData,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List);