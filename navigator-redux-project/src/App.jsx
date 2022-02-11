import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Profile from './Pages/profile';
import Home from './Pages/Home';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

function App() {
  const myStore = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  myStore.subscribe(()=> console.log(myStore.getState()));

  // store.dispatch(NEW_PROFILE());

  return (
    <Provider store={myStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="*" element={<Home />}/>
        </Routes>
      </Router> 
    </Provider> 
  )
}
export default App;


