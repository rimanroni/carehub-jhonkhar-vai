import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root/Root";
import Error from "../components/ErrorPages/Error";
import Home from "../components/Home/Home";
import Jobs from "../components/Jobs/Jobs";
import Statistics from "../components/Statistics/Statistics";
import Bolog from "../components/Bolog/Bolog";
import JobDetils from "../components/JobDetils/JobDetils";
import Myjob from "../components/MyJobs/Myjob";

   const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error/>,
      element:  <Root/>,
      children:[
        {
            path:"/", 
            element:<Home/>
        },
        {
            path:"/applied",
            element:<Jobs/>
        },
        {
            path:"/statistics",
            element:<Statistics/>
        },
        {
            path:'/bolog',
            element:<Bolog/>
        },
        {
            path:'/jobDetails/:jobId',
             element:<JobDetils/>, 
             loader:()=>fetch('/public/data/jobs.json')
        },
        {
            path:'/appledMyjobs',
            element:<Myjob/>,
            loader:()=>fetch('/public/data/jobs.json')
        }
      ]
    },
  ]);
 
export default router;