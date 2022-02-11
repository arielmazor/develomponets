import React from 'react';
import ReactDOM from 'react-dom';
import './_homeContext.scss';
import { useNavigate, Link } from'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { INCROMENT, NEW_PROFILE } from '../../actions'


function HomeContext() {
  const dispatch = useDispatch();
  let typedId = '';
  
  const GetProfileId = () =>{
    
    let profile = useSelector((state) => state.counter);
    debugger;
    console.log(profile)
    return "profile/asd";
  }

  const GetProfile = (id) =>{
    let profile = useSelector((state) =>{
      return state.profiles.forEach(item => {
        if(item.id == id){
          return item;
        }
      });
    });
    return profile;
  }

  const HandleClick = () =>{
    let profile = GetProfile(typedId)
    if(profile == undefined){
      // useDispatch(NEW_PROFILE({id:1,name: typedId}))
    }else{
      return `/profile/${profile.id}`
    }
  }

  return ( 
    <React.Fragment>
      <div className="title">What Profile you want to enter?</div>
      <div className="wrap">
      <input onInput={e => typedId = e.target.value} type="text" placeholder='Eneter profile id' className="search-user-input" />
      <Link to={HandleClick}>asdasd</Link>
      {/* <div onClick={() => {unsubscribe(); }} className="btn f-c">enter</div> */}
      </div>
    </React.Fragment> 
  );

}

export default HomeContext;


