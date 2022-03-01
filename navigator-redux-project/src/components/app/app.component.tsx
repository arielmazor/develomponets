import { Outlet } from 'react-router-dom';
import './_app.scss';
import Navbar from '../navbar/navbar';

export default function AppComponent() {
  return ( 
    <>
      <div className="home f-c">
        <Navbar />
        <div className="wrap">
          <div className="outlet f-c">
           <Outlet />
          </div>
        </div>           
      </div>
  </>
  );
};