
import {  useFormik } from 'formik';
import { Link } from "react-router-dom";
const Registration = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            occupation: "",
            phonenumber: "",


        },
        onSubmit: values => {
            console.log(values);

        }
    })
    return (
        <div>
            <div className=" min-h-screen  mt-44 md:mt-32 lg:mt-36 ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-yellow-600  text-center font-bold p-8">Registartion</h1>


                    </div>
                    <div className="card w-1/2 mx-auto  shadow-2xl ">

                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" id="name" name="name" placeholder="Name" onChange={formik.handleChange}
                                    value={formik.values.name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" id="email" name="email" placeholder="email" onChange={formik.handleChange}
                                    value={formik.values.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password " id="password" name="password" placeholder="password" onChange={formik.handleChange}
                                    value={formik.values.password} className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">occupation</span>
                                </label>
                                <input type="text" id="occupation" name='occupation' placeholder="occupation" onChange={formik.handleChange}
                                    value={formik.values.occupation} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="tel" id="phonenumber" name='phonenumber' placeholder="Phone Number (start +88)" onChange={formik.handleChange}
                                    value={formik.values.phonenumber} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-yellow-700 text-2xl font-semibold text-white hover:bg-yellow-800 btn-primary">Register</button>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="divider divider-start"></div>

                            </div>
                            <div className="flex gap-8 flex-col md:flex-row lg:flex-row  mt-4">
                                <p className="text-xl text-green-700 font-bold">Already have an account ? </p>
                                <Link to="/login"><button className="text-xl bg-black text-white p-2 rounded-md">Login</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;