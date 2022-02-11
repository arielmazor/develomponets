import React from 'react';
import ReactDOM from 'react-dom';
import './_home.scss'
import HomeContext from '../components/homeContext/homeContext.component';

function Home() {
  return ( 
    <div className="home f-c">
      <HomeContext />
    </div>
  );
}

export default Home;