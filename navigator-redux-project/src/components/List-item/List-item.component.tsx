import React from 'react';
import ReactDOM from 'react-dom';
import './_List-item.scss';
import { useNavigate } from'react-router-dom';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../store/Reducers/Students/actions.creators';
import { IState } from "store";
import { IStudent } from 'store/Reducers/Students/types';


const HomeContext = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate();

  return ( 
    <React.Fragment>
        
    </React.Fragment> 
  );

}

export default HomeContext;


