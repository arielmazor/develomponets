import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteusers } from 'store/users-reducer/users.actions';
import { IState } from 'store/store';
import { IUser } from 'store/users-reducer/users.types';
import './_listItem.scss';

function ListItem(props: any) { 
  const navigate = useNavigate();
  const [user, setuser] = useState(props.Getusers(props.id));
  return (
    <div className="list-item" key={user.id}> 
      <div className="wrap">
        <div>{user.name}</div>
        <div>{user.desc}</div>
      </div>      
      <div className="delete-btn f-c"onClick={() => props.handleDelete(user.id)}>
      <svg width="20" height="20" viewBox="0 0 24 24" className="NSy2Hd cdByRd RTiFqe undefined"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
      </div>
      <div onClick={() => navigate(`/users/${user.id}`)} className="popper"></div>
  </div>
  )
}

function mapStateToProps(state: IState) {
  return {
    Getusers: (usersId: string) => state.users.find((users: IUser) => {
      return users.id == usersId;
    }),
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    handleDelete: deleteusers,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);