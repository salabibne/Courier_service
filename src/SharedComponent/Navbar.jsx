import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <div className="navbar flex-col md:flex-row lg:flex-row bg-neutral text-neutral-content">
                <Link to ="/"><button className="btn btn-ghost text-xl text-yellow-600 font-sans font-semibold">Send Eassy</button></Link>
                <div className="text-white font-extrabold flex mx-auto"><IoCallSharp className="mr-2"/> Call us  :   <span className="text-yellow-600 ml-2">  +8801701474332</span></div>
                <button className="bg-yellow-600 text-white btn  font-bold">Sign In</button>
            </div>
            
        </div>
    );
};

export default Navbar;