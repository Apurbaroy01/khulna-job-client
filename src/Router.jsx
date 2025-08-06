import { createBrowserRouter } from "react-router-dom";
import HomePge from "./Components/HomePage.jsx/HomePge";
import Register from "./Components/Register/Register";
import Headers from "./Components/Headers/Headers";
import Login from "./Components/Register/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePge></HomePge>,
    errorElement:<h1>Error Page</h1>,
    children:[
      {
        path:'/',
        element:<Headers></Headers>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'login',
        element:<Login></Login>
      },
    ],
  },
]);

export default router