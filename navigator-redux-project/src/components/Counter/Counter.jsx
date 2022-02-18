import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {increaseCount, decreaseCount, resetCount} from 'store/Reducers/Counter/actions.creators';


const Counter = (props) =>{ 
  return (
    <div> 
    <h1> Counter </h1>
    <h1> {props.count} </h1>
    <button onClick={props.handleIncrease}> Increase </button>
    <button onClick={props.handleDecrease}> Decrease </button>
    <button onClick={props.handleReset}> Reset </button>
  </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: increaseCount,
    handleDecrease: decreaseCount,
    handleReset: resetCount,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);