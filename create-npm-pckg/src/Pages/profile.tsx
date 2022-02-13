
import React from 'react';
import ReactDOM from 'react-dom';
import {useParams , useNavigate} from 'react-router-dom';

function About() {
  let { profileId } = useParams();

  return ( 
  <div>{ profileId }</div>
   );
}

export default About;