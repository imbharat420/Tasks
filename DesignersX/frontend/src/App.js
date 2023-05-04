import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

import Home from './pages/Home';
import Album from './pages/Album';

const TestComponent = ({ text }) => {
  return <h1>{text}</h1>;
};

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <TestComponent text="User Profile" />,
      },
      {
        path: '/cart',
        element: <TestComponent text="Cart Page" />,
      },
      {
        path: '/store',
        element: <TestComponent text="Store Page" />,
      },
      {
        path: '/gift',
        element: <TestComponent text="Gift Page" />,
      },
      {
        path: '/album',
        children: [
          {
            path: ':id',
            element: <Album />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
