

import delivery_vehicle from "../../../public/Bannar/delevaryVehicle.jpg"
const About = () => {
    return (
        <div>
            {/* for main div , using flex  */}
            <div className="flex flex-col md:flex-row lg:flex-row justify-evenly items-center gap-0 ">

                {/* for picture */}

                <div className="p-6 ">
                    <img className= "  w-[400px] h-[300px]  md:w-[700px] md:h-[450px] lg:w-[800px] lg:h-[600px]" src={delivery_vehicle}></img>
                </div>

                {/* text content */}
                <div className="border-8 border-yellow-600 p-8 mx-auto">
                    <h1 className=" text-3xl md:text-4xl lg:text-5xl ml-4 font-sans font-bold uppercase">What we are <br></br>offering you?</h1>
                    <p className="mr-2 p-4 text-wrap text-gray-600 text-lg">
                        Introducing Send Easy: Effortless courier service for seamless deliveries. <br></br>Simply place your order, and we'll  efficiently distribute and seal packages <br></br> in our 64 warehouses. Our streamlined process ensures swift and secure <br></br> delivery to your doorstep. Experience the convenience of a reliable courier <br></br>service with send-Easy making shipping easy and hassle-free.</p>
                </div>
            </div>
        </div>
    );
};

export default About;