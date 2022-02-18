import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IState } from '../../store';
import { IProfile } from '../../store/reducers/profiles/types';
import ProfileContext from '../../Providers/profiles/profile.context';
import './Profile.page';

type IProfileRouteParams = {
  profileId: string,
}

const ProfilePage = () =>  {
  const navigate = useNavigate();
  const ProfileProvider = useContext(ProfileContext);
  debugger;
  console.log("🚀 ~ file: Profile.page.tsx ~ line 17 ~ ProfilePage ~ ProfileProvider", ProfileProvider)
  const Params = useParams<IProfileRouteParams>();
  const profile: IProfile | undefined = ProfileProvider.GetProfile(Params.profileId || "");
  if(!profile){
    navigate(`../../home`)
  }

  return ( 
    <React.Fragment>
      <div className="wrapper">
        <div className="name">{profile && profile.name}</div>
      </div>
    </React.Fragment>
   );
}

export default ProfilePage;