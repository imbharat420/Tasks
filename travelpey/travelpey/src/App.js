import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/TermsAndCondition';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
