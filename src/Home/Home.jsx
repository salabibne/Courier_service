import { Helmet } from "react-helmet-async";
import About from "../SharedComponent/About/About";
import Bannar from "./Bannars/Bannar";
import BeMerchant from "./BeMerchant";
import Everything from "./Everything";
import Feedback from "./Feedback";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home</title>
      
      </Helmet>
            <Bannar></Bannar>
            <About></About>
            <Everything></Everything>
            <Feedback></Feedback>
            <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;