import { createBrowserRouter } from "react-router-dom";
import HomePge from "./Components/HomePage.jsx/HomePge";
import Register from "./Components/Register/Register";

import Login from "./Components/Register/Login";
import AllJobs from "./Components/JobComponents/AllJobs";
import JobDetails from "./Components/JobComponents/JobDetails";
import PrivetRouter from "./Components/PrivetRouter/PrivetRouter";
import JobApply from "./Components/JobComponents/JobApply";
import Application from "./Components/Application/Application";
import AddJob from "./Components/MyPost.jsx/AddJob";
import MyPost from "./Components/MyPost.jsx/MyPost";




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
        element: <JobApply></JobApply>
      },
      {
        path: 'application',
        element: <Application></Application>
      },
      
      {
        path: 'addjob',
        element: <AddJob></AddJob>
      },
      {
        path: 'mypost',
        element: <MyPost></MyPost>
      },
      

    ],
  },
]);

export default router