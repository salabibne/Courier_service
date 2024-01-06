
import grocery from "../../public/HighlitedCategory/grocery.jpg"
import pet from "../../public/HighlitedCategory/prt.jpg"
import construction from "../../public/HighlitedCategory/constructions.jpg"
import medicine from "../../public/HighlitedCategory/medicine.jpg"
const Everything = () => {
    return (
        <div>
            <h1 className="text-lg md:text-xl lg:text-5xl text-center p-4 mt-12 font-bold mb-3 uppercase">Your one-stop solutions</h1>
            <p className="text-center text-xl py-2 text-zinc-500 text-wrap">you can delevery A to Z packages, bags, baby goods, rotten & frozen items,<br></br> grocery items, medicines, pets, electric and electronics,chemicals , and even heavy weighted items through us .</p>
            <p className="text-center text-xl py-2 text-yellow-500 font-bold text-wrap">Highlited Categories</p>


            <div className="grid p-4   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 items-center justify-center">
                {/* grocery */}
                <div className="card border-2 border-yellow-600   card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={grocery} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* pet */}
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={pet} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* medicine */}
                <div className="card  card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={medicine} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Constructions */}
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={construction} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Everything;