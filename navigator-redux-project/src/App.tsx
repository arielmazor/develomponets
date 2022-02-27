import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from "react-redux";
import myStore from 'store/store';
import AppRoutes from './app.routing';

function App() {
  return (
    <div className="app-container f-c">
      <StoreProvider store={myStore}>
        <BrowserRouter>
          <Suspense fallback={<>...</>}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter> 
      </StoreProvider>
    </div>
  )
}

export default App;
