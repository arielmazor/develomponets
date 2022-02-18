import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IProfile } from '../../store/reducers/profiles/types';
import ProfilesContext from './profile.context';
import { IChildren } from '../../types';

const ProfileProvider = ({ children }: IChildren) => {
  const Profiles = useSelector((state: IState) => state.profiles);

  //----------------------
  // GetProfile
  //----------------------

  const GetProfile = (name: string): IProfile | undefined => {
    return Profiles.find(profile => profile.name == name);
  }


  return (
    <ProfilesContext.Provider value={{GetProfile}}>
      {children}  
    </ProfilesContext.Provider>
  )
}

export default ProfileProvider;