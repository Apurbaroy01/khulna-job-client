import { createBrowserRouter } from "react-router-dom";
import HomePge from "./Components/HomePage.jsx/HomePge";
import Register from "./Components/Register/Register";

import Login from "./Components/Register/Login";
import AllJobs from "./Components/JobComponents/AllJobs";
import JobDetails from "./Components/JobComponents/JobDetails";
import PrivetRouter from "./Components/PrivetRouter/PrivetRouter";
import JobApply from "./Components/JobComponents/JobApply";



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
      {
        path: 'job/:id',
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`),
        element: <PrivetRouter><JobDetails></JobDetails></PrivetRouter>
      },
      {
        path: 'jobapply/:id',
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`),
        element: <PrivetRouter><JobApply></JobApply></PrivetRouter>
      },

    ],
  },
]);

export default router