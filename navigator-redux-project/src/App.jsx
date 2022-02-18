import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider as StoreProvider } from "react-redux";
import myStore from 'store';
const HomeComponent = React.lazy(() => import('Pages/Home/Home.page'));
const Profile = React.lazy(() => import("Pages/Profiles/Profile.page"));


function App() {
  return (
    <StoreProvider store={myStore}>
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
    </StoreProvider> 
  )
}
export default App;