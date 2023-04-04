import TopTruckCard from "../TopTruckCard/TopTruckCard";
import { selectTopThreeTrucks, getTrucksStatus } from '../../redux/features/trucksSlice';
import { getAllLikes } from "../../redux/features/likesSlice";
import { useSelector } from 'react-redux';
import Loading from "../common/Loading/Loading";
import "./BestTrucks.css";

const BestTrucks = () => {

    const likes = useSelector(getAllLikes);
    const likesCount = {};
    likes.forEach(like => {
        const truckId = like.truckId;
        if (!likesCount[truckId]) {
            likesCount[truckId] = 1;
        } else {
            likesCount[truckId] += 1;
        }
    });

    const topLikesForTrucks = Object.entries(likesCount).sort((a, b) => b[1] - a[1]).slice(0, 3);
    const [first, second, third] = [...topLikesForTrucks];
    const firstId = first[0];
    const firstLikes = first[1];
    const secondId = second[0];
    const secondLikes = second[1];
    const thirdId = third[0];
    const thirdLikes = third[1];

    const selectorTrucks = useSelector((state) => selectTopThreeTrucks(state, firstId, secondId, thirdId));

    const topTrucks = [];

    selectorTrucks.forEach(truck => {
        topTrucks.push({ ...truck });
    });
    topTrucks.forEach(truck => {
        if (truck.objectId === firstId) {
            truck.likes = firstLikes;
        } else if (truck.objectId === secondId) {
            truck.likes = secondLikes;
        } else if (truck.objectId === thirdId) {
            truck.likes = thirdLikes;
        }
    });

    let i = 0;
    const isloaded = useSelector(getTrucksStatus);
    return (
        <>
            <h1 className="best-trucks-title">top 3 off-road trucks</h1>
            {isloaded === 'succeeded'
                ? <section className="best-trucks-wrapper">
                    {topTrucks.sort((a, b) => b.likes - a.likes).map(x => <TopTruckCard key={x.objectId} truck={x} place={++i} />)}
                </section>
                : <Loading />
            }
        </>
    );
}

export default BestTrucks;