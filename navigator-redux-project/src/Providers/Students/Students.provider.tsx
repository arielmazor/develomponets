import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'store';
import { IStudent } from 'store/Reducers/Students/types';
import ProfilesContext from './Students.context';
import * as Actions from 'store/Reducers/Students/actions.creators'
import { IPropsChildren } from 'types';

const ProfileProvider = ({ children }: IPropsChildren) => {
  const Students: IStudent[] | null = useSelector((state: IState) => state.students);
  const initData: IStudent[] = [
    { name: 'asadasd', id:1},
    { name: 'asdasr', id:2},
  ];
  const GetInitData = (): IStudent[] => {
    return initData;
  }

  //----------------------
  // GetProfile
  //----------------------

  const GetStudents = (): void => {
    if(Students.length === 0){
      Actions.SET_INIT_DATA(GetInitData())
    };
    console.log(Students);
  }


  return (
    <ProfilesContext.Provider value={{GetStudents}}>
      {children}  
    </ProfilesContext.Provider>
  )
}

export default ProfileProvider;