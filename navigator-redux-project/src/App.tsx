import { Suspense, lazy } from 'react';
import { useRoutes, BrowserRouter as Router} from 'react-router-dom';
import { Provider as StoreProvider } from "react-redux";
import myStore from 'store/store';
import UsersProivder from 'providers/users/users.provider';
import Loading from 'shared/components/loading/loading';
const AppComponent = lazy(() => import('components/app/app.component'));

function App() {
  return (
    <div className="app-container f-c">
      <StoreProvider store={myStore}>
        <Router>
          <Suspense fallback={<>...</>}>
            <Routes />
          </Suspense>
        </Router> 
      </StoreProvider>
    </div>
  )
}

const Routes = () => useRoutes([
  { path: "/", element: <AppComponent /> },
  { path: "/home", element: <AppComponent /> },
  { path: "/users", element: <AppComponent /> },
]);

export default App;
