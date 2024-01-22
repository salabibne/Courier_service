
import { useLocation } from "react-router-dom";
import delivery_vehicle from "../../../public/Bannar/delevaryVehicle.jpg"
import mission from "../../../public/mission/mission.jpg"
import people from "../../../public/About/pic_1.jpg"
import ware_house from "../../../public/About/pic_2.jpg"
import truck from "../../../public/About/Pic_3.jpg"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
const About = () => {

    const urlLocation = useLocation();
    const [page, setPage] = useState("");
    console.log(urlLocation.pathname);
    useEffect(() => {
        if (urlLocation.pathname === "/about") {
            setPage("about")
        }
        else {
            setPage("")
        }
    }, [urlLocation.pathname])


    return (
        <div>
            {
                page && <Helmet>
                    <title>About</title>
                </Helmet>
            }
            {/* text Content about SendEasy */}

            {
                page && <div>
                    <div className="mt-24 flex flex-col md:flex-row lg:flex-row justify-evenly items-center gap-0 ">

                        {/* for picture */}

                        <div className="p-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:w-1/2 lg:w-1/2 ">
                            <img className=" rounded-lg border-4 border-yellow-400 w-[450px] h-[350px]  md:w-[450px] md:h-[350px] lg:w-[400px] lg:h-[300px]" src={people}></img>
                            <img className=" rounded-lg border-4 border-yellow-400 w-[450px] h-[350px]  md:w-[450px] md:h-[350px] lg:w-[400px] lg:h-[300px]" src={truck}></img>
                            <img className=" rounded-lg border-4 border-yellow-400 sm:ml-0 md:ml-0 lg:ml-36  w-[450px] h-[350px]  md:w-[450px] md:h-[350px] lg:w-[400px] lg:h-[300px]" src={ware_house}></img>

                        </div>

                        {/* text content */}
                        <div className="border-8 w/12 border-yellow-600 p-8 mx-auto">
                            <h1 className=" text-3xl md:text-4xl lg:text-5xl ml-4 font-sans font-bold uppercase">Send Easy</h1>
                            <p className="mr-2 p-4 text-wrap text-gray-600 text-lg">Welcome to Send Easy, your premier courier service with a network of 64 branches <br></br>dedicated to ensuring swift and reliable deliveries. Our commitment is to provide fast <br></br> delivery solutions that prioritize both speed and security. Navigating our user-friendly <br></br>platform is a breeze, making Send Easy the epitome of convenience in courier services.<br></br> Experience the seamless blend of efficiency and ease with every package sent through<br></br> Send Easy—where fast delivery meets simplicity.</p>
                           
                        </div>

                    </div>
                </div>
            }

            {/* for main div , using flex  */}
            <div className="flex mt-12 flex-col md:flex-row lg:flex-row justify-evenly items-center gap-0 ">

                {/* for picture */}

                <div className="p-6 ">
                    <img className="  w-[400px] h-[300px]  md:w-[700px] md:h-[450px] lg:w-[800px] lg:h-[600px]" src={delivery_vehicle}></img>
                </div>

                {/* text content */}
                <div className="border-8 border-yellow-600 p-8 mx-auto">
                    <h1 className=" text-3xl md:text-4xl lg:text-5xl ml-4 font-sans font-bold uppercase">What we are <br></br>offering you?</h1>
                    <p className="mr-2 p-4 text-wrap text-gray-600 text-lg">
                        Introducing Send Easy: Effortless courier service for seamless deliveries. <br></br>Simply place your order, and we'll  efficiently distribute and seal packages <br></br> in our 64 warehouses. Our streamlined process ensures swift and secure <br></br> delivery to your doorstep. Experience the convenience of a reliable courier <br></br>service with send-Easy making shipping easy and hassle-free.</p>
                </div>

            </div>
            {

                page && <div>
                    <div className="flex flex-col md:flex-row lg:flex-row-reverse justify-evenly items-center gap-0 ">

                        {/* for picture */}

                        <div className="p-6 ">
                            <img className="  w-[300px] h-[200px]  md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[500px]" src={mission}></img>
                        </div>

                        {/* text content  misssion */}
                        <div className="border-8 border-yellow-600 p-8 mx-auto">
                            <h1 className=" text-3xl md:text-4xl lg:text-5xl ml-4 font-sans font-bold uppercase">Our Mission</h1>
                            <p className="mr-2 p-4 text-wrap text-gray-600 text-lg">
                                Unveiling Send Easy: Pioneering seamless courier solutions for flawless missions.<br></br> Just submit your request, and we'll adeptly organize and enclose parcels across our 64 hubs.<br></br> Our optimized system guarantees prompt and protected dispatch to your destination. Encounter <br></br>the ease of a dependable courier service with Send Easy, simplifying shipping for your<br></br> mission with effortless precision.
                            </p>

                        </div>

                    </div>
                </div>


            }



        </div>
    );
};

export default About;