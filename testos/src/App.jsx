import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from "react-redux";
import myStore from './store';
const HomePage = React.lazy(() => import('./Pages/Home'));
const Profile = React.lazy(() => import("./Pages/profile"));


function App() {
  return (
    <Provider store={myStore}>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<>...</>}>
              <HomePage />
            </React.Suspense>
          } />
          <Route path="/profile/:profileId" element={
            <React.Suspense fallback={<>...</>}>
              <Profile /> 
            </React.Suspense>
          } />
          <Route path="*" element={
            <React.Suspense fallback={<>...</>}>
              <HomePage />
            </React.Suspense>
          } />
        </Routes>
      </Router> 
    </Provider> 
  )
}
export default App;


