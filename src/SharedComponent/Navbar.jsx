import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import logo from "../../public/lg.png";
import { useContext } from "react";
import { CourierContext } from "../Context/AuthContext";
const Navbar = () => {
    const { user } = useContext(CourierContext)

    const navComponents = <>
        <Link to="/"><li className="font-bold hover:text-yellow-600 hover:font-bold hover:text-2xl text-lg"><a>Home</a></li></Link>
        <li className="font-bold hover:text-yellow-600 hover:font-bold hover:text-2xl text-lg"><a>Tracking</a></li>
        <li className="font-bold hover:text-yellow-600 hover:font-bold hover:text-2xl text-lg"><a>About</a></li>
        <li className="font-bold hover:text-yellow-600 hover:font-bold hover:text-2xl text-lg"><a>Pricing</a></li>
        <li className="font-bold hover:text-yellow-600 hover:font-bold hover:text-2xl text-lg"><a>Contact</a></li>
        <li className="font-bold hover:text-yellow-600 hover:font-bold hover:text-2xl text-lg"><a>Career</a></li>
        <li className="font-bold hover:text-blue-500 hover:font-bold hover:text-2xl text-lg"><a>DASHBORD</a></li>


    </>
    return (
        <div className="fixed top-0 z-10 w-full" >
            <div className="navbar flex-col md:flex-row lg:flex-row bg-neutral text-neutral-content">
                <Link to="/"><button className="btn btn-ghost text-xl text-yellow-600 font-sans font-semibold">
                    <span><img className="w-[20px] h-[20px]" src={logo}></img></span>Send Easy</button></Link>
                <div className="text-white font-extrabold  mx-auto"><IoCallSharp className="mr-2" /> Call us  :   <span className="text-yellow-600 ml-2">  +8801701474332</span></div>
                {
                    user ? <div className="flex">
                        <div>
                            <p className="text-white">{user?.displayName}</p>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn flex btn-ghost btn-circle avatar">

                                <div className="w-10  rounded-full">
                                    <img className="flex-1" src={user.photoURL} />


                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                <li className="text-black"><a>Logout</a></li>
                                <li className="text-black"><a>{user.displayName}</a></li>
                            </ul>
                        </div>
                    </div>
                        : <Link to="/login"><button className="bg-yellow-600 text-white btn  font-bold">Sign In</button></Link>
                }


            </div>

            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navComponents}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navComponents}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;