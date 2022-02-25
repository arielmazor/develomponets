import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteusers, editUser } from 'store/users-reducer/users.actions';
import { IState } from 'store/store';
import { IUser } from 'store/users-reducer/users.types'
import './_viewer.scss';

export function Viewer(props: any) { 
  const [users, setusers] = useState(props.Getusers(props.id));
  var typedName: string = "";
  var typedEmail: string = "";
  function handleSaveBtnClick(){
    let user = {
      name: typedName,
      email: typedEmail,
      id: props.id
    }
    props.handleEdit(user);
  }

  return (
    <div key={users.id} className="viewer-container f-c">
      <div className="viewer-wrapper" > 
        <div className="wrap">
          <div className="form">
          <input onChange={(e) => typedName = e.target.value} className="name-inp" type="text" name="text" autoComplete="off" required />
          <label htmlFor="text" className="label-name">
          <span className="content-name">
          Please enter name
          </span>
          </label>
          </div>
          <div className="form">
          <input onChange={(e) => typedEmail = e.target.value} type="text" name="text" autoComplete="off" required />
          <label htmlFor="text" className="label-name">
          <span className="content-name">
          Please enter email
          </span>
          </label>
          </div>
        </div>      
        <div onClick={handleSaveBtnClick} className="save-btn">save</div>
        <div className="delete-btn f-c"onClick={() => props.handleDelete(users.id)}>
        <svg width="20" height="20" viewBox="0 0 24 24" className="NSy2Hd cdByRd RTiFqe undefined"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
        </div>
    </div>
    <div onClick={() => props.setViewerOpt({id:-1, show: false})} className="popper"></div>
  </div>
  )
}

function mapStateToProps(state: IState) {
  return {
    Getusers: (usersId: number) => state.users.find((users: IUser) => {
      return users.id == usersId;
    }),
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    handleDelete: deleteusers,
    handleEdit: editUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);