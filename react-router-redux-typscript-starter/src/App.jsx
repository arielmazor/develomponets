import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from "react-redux";
import myStore from './store';
const HomeComponent = React.lazy(() => import('./Pages/Home'));
const Profile = React.lazy(() => import("./Pages/profile"));


function App() {
  return (
    <Provider store={myStore}>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<>...</>}>
              <HomeComponent />
            </React.Suspense>
          } />
          <Route path="/profile/:profileId" element={
            <React.Suspense fallback={<>...</>}>
              <Profile /> 
            </React.Suspense>
          } />
          <Route path="*" element={
            <React.Suspense fallback={<>...</>}>
              <HomeComponent />
            </React.Suspense>
          } />
        </Routes>
      </Router> 
    </Provider> 
  )
}
export default App;


