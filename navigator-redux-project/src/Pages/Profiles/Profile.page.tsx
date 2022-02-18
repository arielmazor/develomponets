import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { IStudent } from 'store/Reducers/Students/types';
//import ProfileContext from 'Providers/students/profile.context';
import './_Profiles.scss';

type IStudentRouteParams = {
  profileId: string,
}

const ProfilePage = () =>  {
  const navigate = useNavigate();
  //const ProfileProvider = useContext(ProfileContext);
  const Params = useParams<IStudentRouteParams>();
 // const profile: IStudent | undefined = ProfileProvider.GetProfile(Params.profileId || "");
//  if(!profile){
//    navigate(`/home`);
//  }

  return ( 
    <React.Fragment>
      <div className="wrapper">
       {/*  <div className="name">{profile && profile.name}</div> */}
      </div>
    </React.Fragment>
   );
}

export default ProfilePage;