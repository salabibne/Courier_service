
import bannar from "../../../public/Bannar/truck.jpg"
const Bannar = () => {
    return (
        <div className="flex items-center justify-center mt-20">
            {/* <img className="w-[1500px] h-[890px]" src={bannar}></img> */}
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${bannar})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5 font-bold text-4xl">Introducing </p>
                        <h1 className="mb-5 text-5xl text-yellow-600 font-bold">Courier Service</h1>
                        <p className=" text-xl font-bold">We are providing you easy courier from one place to another place, NonStop.</p>
                        <p className="mb-5 text-3xl mt-4 font-bold">Follow <span className="text-2xl  btn-sm btn-circle p-2 bg-yellow-600">3</span> Steps!</p>

                        <ul className="steps">
                            <li className="step  step-accent text-2xl font-bold">Trust</li>
                            <li className="step step-accent text-2xl font-bold">Send</li>
                            <li className="step step-accent text-2xl font-bold">Receive</li>
                           
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;