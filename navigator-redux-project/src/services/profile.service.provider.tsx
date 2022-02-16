import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { IState } from '../store';

type ProfileServiceResult = ReturnType<typeof ProfileService>;

const ProfileServiceContext = createContext<ProfileServiceResult>({
  profiles: "asd",
  GetProfile: () => {},
});

export interface IChildren {
  children: JSX.Element[] | JSX.Element,
}

const ProfileService = ({ children }: IChildren) => {
  const Profiles = useSelector((state: IState) => state.profiles);
  const GetProfile = (name: string) =>{
    return Profiles.find(item => item.name === name);
  }
  return (
    <ProfileServiceContext.Provider value={{GetProfile}}></ProfileServiceContext.Provider>
  )
}

export default ProfileService;

// import React, { createContext } from 'react';
// import ReactDOM from 'react-dom';
// import { useSelector } from 'react-redux';
// import { IState } from '../store';

// export interface IChildren {
//   children: JSX.Element[] | JSX.Element,
// }

// const ProfileServiceContext = createContext();

// const ProfileService = ({ children }: IChildren) => {
//   const Profiles = useSelector((state: IState) => state.profiles);
//   const getProfile = (name: string) =>{
//     return Profiles.find(item => item.name === name);
//   }
//   return (
//     <ProfileServiceContext.Provider value={{getProfile}}></ProfileServiceContext.Provider>
//   )
// }