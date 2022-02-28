import { useState, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './_app.scss';
import Navbar from '../navbar/navbar';
import usersContext from 'providers/users/users.context';
import Loading from 'shared/components/loading/loading';

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