import React from 'react';
import ReactDOM from 'react-dom';
import './_nav-bar.scss';
import { useNavigate } from'react-router-dom';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../store/reducers/template/actions.creators';
import { IState } from "../../store";
import { IProfile } from '../../store/reducers/template/types';


const NavBar = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate();
  const Teacherprofile = useSelector((state: IState) => state.teacher)

  return ( 
    <React.Fragment>
      <nav className="nav-bar">
        <div className="profile">
          <div className="name">{ Teacherprofile.name }</div>  
          <div className="img-wrapper f-c">
            <img className="img" src="https://gcdnb.pbrd.co/images/d2cGtPKlAKh7.jpg?o=1" alt="" />
            </div>
        </div>
      </nav>
    </React.Fragment> 
  );

}

export default NavBar;