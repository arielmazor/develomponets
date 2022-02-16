
import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IState } from '../store';
import { IProfile } from '../store/reducers/profiles/types';
import * as ProfileService from '../services/profile.service.provider';

const Profile = () =>  {
  const { profileName } = useParams();
  const profiles: IProfile[] = useSelector((state: IState) => state.profiles)
  const profile: IProfile = ProfileService.getProfile(profileName);

  return ( 
    <React.Fragment>
      <div className="wrapper">
        <div className="name">{profile.name}</div>
      </div>
    </React.Fragment>
   );
}

export default Profile;