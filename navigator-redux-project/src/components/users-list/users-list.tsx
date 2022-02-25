import { useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, initData } from 'store/users-reducer/users.actions';
import { IState } from 'store/store';
import { IUser } from 'store/users-reducer/users.types';
import ListItem from '../listItem/listItem.component'
import { useEffect, useState } from 'react';
import usersContext from 'providers/users/users.context';
import Loading from 'shared/components/loading/loading';
import Viewer from '../viewer/viewer';
import './_list.scss';

interface IViewerOpt {
  id: number,
  show: boolean,
}

const List = (props: any) => {
  const usersProvider = useContext(usersContext);  
  const [isLoading, setIsLoading] = useState(true);
  const [viewerOpt, setViewerOpt] = useState({id:-1, show: false});

  useEffect(()=> {
    fetchingListData()
      .catch(err => console.error(err));
  },[]);

  //-------------------------
  //Fetch List Data
  //-------------------------

  async function fetchingListData(){
    const fetchRes = await usersProvider.fetchData();
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
          <h1> users </h1>
          <div className="list">
            {props.users.map((users: IUser) => {
            return <ListItem setViewerOpt={setViewerOpt} key={users.id} id={users.id} />
            })}
          </div>
          <div className="f-c add-btn"onClick={props.handleIncrease}>+</div>
          {viewerOpt.show && <Viewer setViewerOpt={setViewerOpt} id={viewerOpt.id} />}
        </div>
      )}
    </div>
  )
}

function mapStateToProps(state: IState) {
  return {
    users: state.users,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    handleIncrease: addUser,
    initData: initData,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List);