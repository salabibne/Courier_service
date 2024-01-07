
import grocery from "../../public/HighlitedCategory/grocery.jpg"
import pet from "../../public/HighlitedCategory/prt.jpg"
import construction from "../../public/HighlitedCategory/constructions.jpg"
import medicine from "../../public/HighlitedCategory/medicine.jpg"
const Everything = () => {
    return (
        <div className="mb-8">
            <h1 className="text-lg md:text-xl lg:text-5xl text-center p-4 mt-12 font-bold mb-3 uppercase">Your one-stop solutions</h1>
            <p className="text-center text-xl py-2 text-zinc-500 text-wrap">you can delevery A to Z packages, bags, baby goods, rotten & frozen items,<br></br> grocery items, medicines, pets, electric and electronics,chemicals , and even heavy weighted items through us .</p>
            <p className="text-center text-4xl py-2 mt-8 text-yellow-600 font-bold text-wrap">Highlited Categories</p>


            <div className="grid  md:p-3 lg:p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 max-w-72  md:max-w-fit lg:max-w-fit gap-12 py-8 mx-auto">
                {/* grocery */}
                <div className="card border-2 hover:border-yellow-600 hover:w-80 md:hover:w-80 lg:hover:w-96  card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={grocery} alt="grocery" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title items-center justify-center hover:text-2xl ">Food Item & Groceries</h2>
                        
                    </div>
                </div>
                {/* pet */}
                <div className="card border-2 hover:border-yellow-600 card-compact  hover:w-80 md:hover:w-80 lg:hover:w-96  w-80 bg-base-100 shadow-xl">
                    <figure><img src={pet} alt="pet" /></figure>
                    <div className="card-body">
                        <h2 className="card-title items-center justify-center hover:text-3xl ">pets</h2>
                        
                    </div>
                </div>
                {/* medicine */}
                <div className="card border-2 hover:border-yellow-600 card-compact hover:w-80 md:hover:w-80 lg:hover:w-96  w-80 bg-base-100 shadow-xl">
                    <figure><img src={medicine} alt="medicne" /></figure>
                    <div className="card-body">
                        <h2 className="card-title items-center justify-center hover:text-3xl ">Medicine</h2>
                        
                    </div>
                </div>
                {/* Constructions */}
                <div className="card border-2 hover:border-yellow-600 card-compact hover:w-80 md:hover:w-80 lg:hover:w-96  w-80 bg-base-100 shadow-xl">
                    <figure><img src={construction} alt="constructions" /></figure>
                    <div className="card-body">
                        <h2 className="card-title items-center justify-center hover:text-2xl">Constructions Meterials</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Everything;