import TopTruckCard from "../TopTruckCard/TopTruckCard";
import "./BestTrucks.css";

const BestTrucks = () => {
    return (
        <>
        <h1 className="best-trucks-title">top 3 off-road trucks</h1>
        <section className="best-trucks-wrapper">
            <TopTruckCard/>
        </section>
        </>
    )
}

export default BestTrucks;