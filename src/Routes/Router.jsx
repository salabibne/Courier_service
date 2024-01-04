import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPages/ErrorPage";
import Home from "../Home/Home";

const Router  = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    

    },
  ]);

export default Router;