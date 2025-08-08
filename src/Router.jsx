import { createBrowserRouter } from "react-router-dom";
import HomePge from "./Components/HomePage.jsx/HomePge";
import Register from "./Components/Register/Register";
import Headers from "./Components/Headers/Headers";
import Login from "./Components/Register/Login";
import AllJobs from "./Components/JobComponents/AllJobs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePge></HomePge>,
    errorElement: <h1>Error Page</h1>,
    children: [
      
      {
        path: '/',
        element: <AllJobs></AllJobs>,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },

    ],
  },
]);

export default router