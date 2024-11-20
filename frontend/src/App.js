import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages_user/Home';
import About from './pages_user/about';
import Contact from './pages_user/Contact';
import Shop from './pages_user/shop';
import Dashboard from './pages_admin/Dashbord';
import ManageBooks from './pages_admin/Managebooks';
import ManageUsers from './pages_admin/Manageusers';
import Settings from './pages_admin/Settings';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/admin/manage-books',
    element: <ManageBooks />,
  },
  {
    path: '/admin/manage-users',
    element: <ManageUsers />,
  },
  {
    path: '/admin/settings',
    element: <Settings />,
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
