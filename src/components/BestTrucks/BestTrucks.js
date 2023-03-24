import TopTruckCard from "../TopTruckCard/TopTruckCard";
import { selectAllTrucks, getTrucksStatus } from '../../redux/features/trucksSlice';
import { useSelector } from 'react-redux';

import "./BestTrucks.css";
import Loading from "../common/Loading/Loading";

const BestTrucks = () => {

    const isloaded = useSelector(getTrucksStatus);
    const trucks = useSelector(selectAllTrucks);
    const topTrucks = [...trucks]
        .filter(trucks => trucks.likes)
        .sort((a, b) => b.likes.length - a.likes.length)
        .slice(0, 3);

    let i = 0;
    return (
        <>
            <h1 className="best-trucks-title">top 3 off-road trucks</h1>
            {isloaded === 'succeeded'
                ? <section className="best-trucks-wrapper">
                    {topTrucks.map(x => <TopTruckCard key={x.objectId} truck={x} i={++i} />)}
                </section>
                : <Loading />
            }
        </>
    )
}

export default BestTrucks;