import React from 'react';
import ReactDOM from 'react-dom';
import './_home.scss'
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar/NavBar.component'; 
import List from '../components/List/List.component';

const Home = () => {

  return ( 
    <div className="home f-c">
      <NavBar />
      <List />
    </div>
  );
}

export default Home;