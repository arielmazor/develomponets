import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import usersContext from './users.context';
import { IPropsChildren } from 'shared/interfaces/types';
import { IState } from 'store/store';
import { IUser } from 'store/users-reducer/users.types';
import { addUser, deleteusers, editUser, initData } from 'store/users-reducer/users.actions';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentsProvider(props: any) {
  const navigate = useNavigate();


  //----------------------
  // FetchData
  //----------------------

  async function fetchData(): Promise<any> {
    if(props.users.length === 0){
      const url: string = "https://api.jsonbin.io/b/6214f8d2ca70c44b6ea550c5/2";
      const fetchRes = await fetch(url);
      const data: IUser[] = await fetchRes.json();
      
      props.initData(data);
    }
  }

  function getUser(id: string): IUser | undefined {
     return props.users.find((user: IUser) => user.id === id);    
  }

  return (
    <usersContext.Provider value={{
      fetchData: fetchData,
      getUsers: props.getUsers,
      handleDelete: props.handleDelete,
      handleEdit: props.handleEdit,
      getUser: getUser,
      handleAdd: props.handleAdd,
      users: props.users,
    }}>
      {props.children}  
    </usersContext.Provider>
  )
}

function mapStateToProps(state: IState) {
  return {
    users: state.users,
    getUser: (userId: string) =>
      state.users.find((user: IUser) => {
        return user.id === userId;
      }),
    getUsers: () => state,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      handleDelete: deleteusers,
      handleEdit: editUser,
      handleAdd: addUser,
      initData: initData
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsProvider);