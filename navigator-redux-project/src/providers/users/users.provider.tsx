import usersContext from './users.context';
import { IPropsChildren } from 'shared/interfaces/types';

function ProfileProvider({ children }: IPropsChildren) {
  
  //----------------------
  // FetchData
  //----------------------

  async function fetchData(): Promise<any> {
    const url: string = "https://api.jsonbin.io/b/6214f8d2ca70c44b6ea550c5/1";
    const data = await fetch(url)
    return data;
  }


  return (
    <usersContext.Provider value={{fetchData}}>
      {children}  
    </usersContext.Provider>
  )
}

export default ProfileProvider;