import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import StudentsProivder from 'providers/students/students.provider';
import App from './components/app/app.component';
const StudentsList = lazy(() => import('./components/students-list/students-list'));
const StudentProfile = lazy(() => import('./components/student-profile/student-profile'));
const Student = lazy(() => import('./components/student/student'));
const AppRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <StudentsProivder><App /></StudentsProivder>,
      children: [
        {
          path: "/",
          element: <StudentsList />
        },
        {
          path: "/students",
          element: <StudentsList />
        },
        { 
          path: "/students/:id",
          element: <Student />,
          children: [
            { 
              path: "/students/:id/profile",
              element: <StudentProfile />
            },
            { 
              path: "/students/:id/grades",
              element: <StudentProfile />
            },
            { 
              path: "/students/:id/asgiments",
              element: <StudentProfile />
            },
            { 
              path: "/students/:id/*",
              element: <StudentProfile />
            },
          ]
        },
      ],
    },
    { path: "/home", element: <Navigate to="/" /> },
    { path:"*", element: <Navigate to="/" />}
  ]);


export default AppRoutes;