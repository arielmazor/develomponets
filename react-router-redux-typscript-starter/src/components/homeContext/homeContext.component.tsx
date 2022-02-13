import React from 'react';
import ReactDOM from 'react-dom';
import './_homeContext.scss';
import { useNavigate } from'react-router-dom';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../store/reducers/profiles/actions.creators';
import { IState } from "../../store/";
import { IProfile } from '../../store/reducers/profiles/types';


const HomeContext = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate();
  const profiles = useSelector((state: IState) => {
    return state.profiles;
  });
  
  var typedName = '';

  const getLastId = () => {
    let id: number = 0;
    profiles.forEach(item => item.id > id ? id = item.id: id = id);
    return id;
  }

  const HandleSearchClick = (name: string) =>{
    let profile: IProfile | undefined = profiles.find(item => item.name == name);

    if(!profile){
      debugger;
      // dispatch(Actions.NEW_PROFILE(CreateNewProfile(name)))
    }else{
      navigate(`../profile/${profile.id}`);
    }
  }

  const CreateNewProfile = (name: string): IProfile =>{
    return {
      name, id: getLastId() + 1
    }
  }

  const HandleInputType = (e: React.FormEvent<HTMLInputElement>) =>{
    typedName = e.currentTarget.value;
  }

  return ( 
    <React.Fragment>
      <div className="title">What Profile you want to enter?</div>
      <div className="wrap">
      <input onInput={e => {HandleInputType(e)}} type="text" placeholder='Eneter profile id' className="search-user-input" />
       <div onClick={() => HandleSearchClick(typedName)} className="btn f-c">enter</div>
      </div>
    </React.Fragment> 
  );

}

export default HomeContext;


