import {createContext} from 'react';
import { IProfile } from '../../store/reducers/profiles/types';

interface IProfileContext {
  GetProfile: (name: string) => IProfile | undefined,
}

const contextDefaultValue: IProfileContext = { 
  GetProfile: (name: string): IProfile | undefined => {
    return undefined
  },
};

const context = createContext<IProfileContext>(contextDefaultValue);

export default context;