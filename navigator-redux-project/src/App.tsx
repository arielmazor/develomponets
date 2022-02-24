import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider as StoreProvider } from "react-redux";
import myStore from 'store/store';
import StudentsProivder from 'providers/students/students.proivder';
import Loading from 'common/loading/loading';
const HomeComponent = React.lazy(() => import('pages/home/home.page'));

function App() {
  return (
    <div className="app-container f-c">
      <StoreProvider store={myStore}>
        <Router>
          <Routes>
            <Route path="/" element={
              <React.Suspense fallback={<Loading />}>
              <StudentsProivder>
              <HomeComponent />
              </StudentsProivder>  
              </React.Suspense>
            } />
          </Routes>
        </Router> 
      </StoreProvider>
    </div>
  )
}
export default App;