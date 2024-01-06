import About from "../SharedComponent/About/About";
import Bannar from "./Bannars/Bannar";
import Everything from "./Everything";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Everything></Everything>
        </div>
    );
};

export default Home;