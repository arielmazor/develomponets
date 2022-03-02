import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import StudentsProivder from 'providers/students/students.provider';
import StudentsTestsProvider from 'providers/students-tests.provider';
import App from './components/app/app.component';
const StudentsList = lazy(() => import('./components/students-list/student-list.component'));
const StudentProfile = lazy(() => import('./components/student-profile/student-profile.component'));
const Student = lazy(() => import('./components/student/student.component'));
const StudentTests = lazy(() => import('./components/student-tests/student-tests.component'));
const TestViewer = lazy(() => import('./components/test-viewer/test.component'));

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
              path: "/students/:id/tests",
              element: <StudentsTestsProvider><StudentTests /></StudentsTestsProvider>,
              children: [
                {
                  path: "/students/:id/tests/:testId",
                  element: <TestViewer />
                }
              ]
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