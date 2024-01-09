
import { MdOutlineLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div>
            <div className=" min-h-screen  mt-44 md:mt-32 lg:mt-36 ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-yellow-600  text-center font-bold p-8">Login</h1>
                        <MdOutlineLogin className="text-5xl text-yellow-600"></MdOutlineLogin>

                    </div>
                    <div className="card w-1/2 mx-auto  shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-700 text-2xl font-semibold text-white hover:bg-yellow-800 btn-primary">Login</button>
                            </div>
                            <p className="mt-6 text-center font-semibold"> or, Continue with </p>
                            <div className=" flex items-center justify-center mt-6">
                                <button className="text-3xl flex items-center justify-center"><FcGoogle></FcGoogle></button>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="divider divider-start"></div>
                            
                            </div>
                            <div className="flex gap-8 flex-col md:flex-row lg:flex-row  mt-4">
                                <p className="text-xl text-red-500">Do not have an account ? </p>
                                <Link to = "/register"><button className="text-xl bg-black text-white p-2 rounded-md">Regsiter</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;