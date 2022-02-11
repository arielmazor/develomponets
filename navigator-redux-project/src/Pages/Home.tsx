import React from 'react';
import ReactDOM from 'react-dom';
import './_home.scss'
import HomeContext from '../components/homeContext/homeContext.component';
import { useSelector } from 'react-redux';

const Home = () => {
  // let x = useSelector(state => state)
  const ariel = "aariel"//useSelector(state => state);

  const GetAriel = () =>{
    let x: any = useSelector(state =>{return state})
    return x.profiles.profiles[0].name;
  };

  return ( 
    <div className="home f-c">
      <div>{GetAriel()}</div>
      <HomeContext />
    </div>
  );
}

export default Home;