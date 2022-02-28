import { useContext, useEffect, useState } from 'react';
import Loading from 'shared/components/loading/loading';
import { addUser } from 'store/users-reducer/users.actions';
import { IState } from 'store/store';
import { IUser } from 'store/users-reducer/users.types';
import ListItem from '../users-list-item/users-list-item';
import usersContext from 'providers/users/users.context';
import './_users-list.scss';

export default function List(props: any) {
  const usersProvider = useContext(usersContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    fetchingListData()
      .catch(err => console.error(err));
  },[]);

  //-------------------------
  //Fetch List Data
  //-------------------------

  async function fetchingListData(){
    await usersProvider.fetchData();
    setIsLoading(false);
  };  
  return (
    <>
    { isLoading && (<Loading />)}
    <div className="list-container"> 
      <div>
      <h1> users </h1>
      <div className="list">
      {usersProvider.users.map((users: IUser) => {
        return <ListItem key={users.id} id={users.id} />
      })}
      </div>
      <div className="f-c add-btn"onClick={props.handleIncrease}>Add</div>
      </div>
    </div>
    </>
  )
};