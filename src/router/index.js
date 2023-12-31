import Demo from '@/pages/Demo';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home'));
const Entire = React.lazy(() => import('@/pages/entire/Entire'));
const Detail = React.lazy(() => import('@/pages/detail/Detail'));

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/entire',
    element: <Entire />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
];

export default routes;
