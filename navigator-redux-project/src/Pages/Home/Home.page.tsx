import React from 'react';
import ReactDOM from 'react-dom';
import './_home.scss'
import List from 'components/List/List.component';

const Home = () => {
  return ( 
      <div className="home f-c">
          <List />
      </div>
  );
}

export default Home;