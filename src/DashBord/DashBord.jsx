import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponent/Navbar";
import AdminDashBord from "./Admin/AdminDashBord";


const DashBord = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="flex">
                <div className="w-[280px] fixed min-h-screen bg-yellow-600 mt-36">
                    <AdminDashBord></AdminDashBord>
               

                </div>
                <div className="mt-36">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBord;