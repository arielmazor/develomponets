import React from 'react';
import ReactDOM from 'react-dom';
import './_homeContext.scss';
import { useNavigate, Link } from'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Interfaces from '../../interfaces';
import * as Actions from '../../store/actions';
import { IStore } from "../../store/";
import { IProfile } from '../../store/reducers/profiles';


function HomeContext() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profiles = useSelector(state: IStore => {
    debugger;
    return state.profileReducer
  });
  
  var typedName = '';

  const getLastId = () => {
    let id = 0;
    profiles: IProfile.forEach(item => item.id > id ? id = item.id: id = id);
    return id;
  }

  const HandleSearchClick = (name) =>{
    if(!this.profiles.find(item => item.name === item.name)){
      dispatch(Actions.NEW_PROFILE({name:name, id: getLastId() + 1}))
    };

    let profile = this.profile.find(item => item.name == name);
    navigate(`../profile/${profile.id}`)
  }

  return ( 
    <React.Fragment>
      <div className="title">What Profile you want to enter?</div>
      <div className="wrap">
      <input onInput={e => typedName = e.target.value} type="text" placeholder='Eneter profile id' className="search-user-input" /> */}
       <div onClick={() => HandleSearchClick(typedName)} className="btn f-c">enter</div>
      </div>
    </React.Fragment> 
  );

}

export default HomeContext;


