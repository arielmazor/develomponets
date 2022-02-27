import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import UsersProivder from 'providers/users/users.provider';
import AppComponent from './components/app/app.component';
const UserComponent = lazy(() => import('./components/user-profile/user-profile'));
const UsersListComponent = lazy(() => import('./components/users-list/users-list'));
const UserProfile = lazy(() => import('./components/user-profile/user-profile'));

const AppRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <UsersProivder><AppComponent /></UsersProivder>,
      children: [
        {
          path: "/",
          element: <UsersListComponent />
        },
        {
          path: "/users",
          element: <UsersListComponent />
        },
        { 
          path: "/users/:id",
          element: <UserComponent />,
          children: [
            { 
              path: "/users/:id/profile",
              element: <UserProfile />
            },
            { 
              path: "/users/:id/grades",
              element: <UserProfile />
            },
            { 
              path: "/users/:id/asgiments",
              element: <UserProfile />
            },
            { 
              path: "/users/:id/*",
              element: <UserProfile />
            },
          ]
        },
      ],
    },
    { path: "/home", element: <Navigate to="/" /> },
  ]);


export default AppRoutes;