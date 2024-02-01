import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPages/ErrorPage";
import Home from "../Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import About from "../SharedComponent/About/About";
import Price from "../Components/Price";
import DashBord from "../DashBord/DashBord";
import AdminDashBord from "../DashBord/Admin/AdminDashBord";

const Router  = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Registration></Registration>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/price",
          element:<Price></Price>
        }
      ]
    

    },
    {
      path:"/dashbord",
      element:<DashBord></DashBord>,
      children:[
        {
          path:"/dashbord/adminDashbord",
          element:<AdminDashBord></AdminDashBord>
        }
      ]
    }
  ]);

export default Router;