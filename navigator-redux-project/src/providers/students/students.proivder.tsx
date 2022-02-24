import StudentsContext from './students.context';
import { IPropsChildren } from 'common/types';

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
    <StudentsContext.Provider value={{fetchData}}>
      {children}  
    </StudentsContext.Provider>
  )
}

export default ProfileProvider;