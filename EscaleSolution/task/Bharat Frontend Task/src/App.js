import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import FormLayout from "./Layout/FormLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employee",
        element: <FormLayout />,
        children: [
          {
            index: true,
            element: <Create />,
          },
          {
            path: ":id",
            element: <Update />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
