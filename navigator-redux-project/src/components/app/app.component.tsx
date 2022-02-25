import { lazy } from 'react';
import './_home.scss'
import UsersProivder from 'providers/users/users.provider';
import Navbar from './navbar/navbar.component';
const UsersList = lazy(() => import '../users-list/users-list');
export default function AppComponent() {
  return ( 
      <div className="home f-c">
        <UsersProivder>
          <List />
        </UsersProivder>
      </div>
  );
}