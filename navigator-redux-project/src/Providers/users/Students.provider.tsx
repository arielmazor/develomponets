import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'store';
import { IStudent } from 'store/Reducers/Students/types';
import ProfilesContext from './Students.context';
import * as Actions from 'store/Reducers/Students/actions.creators'
import { IPropsChildren } from 'types';

const ProfileProvider = ({ children }: IPropsChildren) => {
  const state = {
    loading: true
  };

  return (
    <ProfilesContext.Provider value={state}>
      {children}  
    </ProfilesContext.Provider>
  )
}

export default ProfileProvider;