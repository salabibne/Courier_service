
import { useFormik } from 'formik';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
// import * as Yup from "yup";
// const DisplayingErrorMessage = Yup.object().shape({
//     name: Yup.string().min(2, "Too Short").max(50, "Too Long").required('Required'),
//     email: Yup.string().email("Invalid Email").required("Required")
// })
// function validateEmail(value) {
//     let error;
//     if (!value) {
//       error = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//       error = 'Invalid email address';
//     }
//     return error;
//   }


const Registration = () => {
    const [showPassword, setShowpassword] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            occupation: "",
            phonenumber: "",
            location:"",


        },
        validate: values => {
            const errors = {}
            if (!values.name) {
                errors.name = 'Required Name';
            }

            if (!values.email) {
                errors.email = 'Required Email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.occupation) {
                errors.occupation = 'Required Occupation';
            }
            if (!values.phonenumber) {
                errors.phonenumber = 'Required Phone Number';
            }
            if (!values.location) {
                errors.location = 'Required Location';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/.test(values.password)
            ) {
                errors.password =
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
            } else if (values.password.length < 6) {
                errors.password = 'Password should be at least 6 characters';
            }
            return errors
        },

        onSubmit: values => {
            console.log(values);

        }
    })
    return (
        <div>
            <Helmet>
                <title>Registration</title>

            </Helmet>
            <div className=" min-h-screen  mt-44 md:mt-32 lg:mt-36 ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-yellow-600  text-center font-bold p-8">Registartion</h1>


                    </div>
                    <div className="card w-1/2 mx-auto  shadow-2xl ">

                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Name</span>
                                </label>
                                <input type="text" id="name" name="name" placeholder="Name" onChange={formik.handleChange}
                                    value={formik.values.name} onBlur={formik.handleBlur} className="input input-bordered" required />
                                {formik.touched.name && formik.errors.name && <p className='text-red-500'>{formik.errors.name}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Email</span>
                                </label>
                                <input type='email' id="email" name="email" placeholder="email" onChange={formik.handleChange}
                                    value={formik.values.email} className="input input-bordered" required />
                                {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Password</span>
                                </label>
                                <div className='flex flex-col md:flex-row lg:flex-row gap-2'>
                                    <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="password" onChange={formik.handleChange}
                                        value={formik.values.password} className="  w-3/4 input input-bordered" required />

                                    {formik.touched.password && formik.errors.password && <p className='text-red-500'>{formik.errors.password}</p>}
                                    <p className='btn text-yellow-600 text-lg w-1/3' onClick={() => setShowpassword(!showPassword)}>{showPassword ? "Hidden Password" : "Show Password"}</p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">occupation</span>
                                </label>
                                <input type="text" id="occupation" name='occupation' placeholder="occupation" onChange={formik.handleChange}
                                    value={formik.values.occupation} className="input input-bordered" required />
                                {formik.touched.occupation && formik.errors.occupation && <p className='text-red-500'>{formik.errors.occupation}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Phone</span>
                                </label>
                                <input type="tel" id="phonenumber" name='phonenumber' placeholder="Phone Number (start +88)" onChange={formik.handleChange}
                                    value={formik.values.phonenumber} className="input input-bordered" required />
                                {formik.touched.phonenumber && formik.errors.phonenumber && <p className='text-red-500'>{formik.errors.phonenumber}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Your Location</span>
                                </label>
                                <input type="text" id="location" name='location' placeholder="Type your District Name, Example: Dhaka" onChange={formik.handleChange}
                                    value={formik.values.location} className="input input-bordered" required />
                                {formik.touched.location && formik.errors.location && <p className='text-red-500'>{formik.errors.location}</p>}
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



