import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import { getAllUserLikes } from "../../redux/features/likesSlice";
import { selectAllTrucks } from "../../redux/features/trucksSlice";
import CatalogCard from "../CatalogCard/CatalogCard";
import "./MyLikes.css";
import { Link } from "react-router-dom";

const MyLikes = () => {
    const { user } = useContext(AuthContext);
    const likes = useSelector((state) => getAllUserLikes(state, user.objectId));
    const myLikedTrucksIds = [];
    likes.forEach(x => {
        myLikedTrucksIds.push(x.truckId);
    });
    const myTrucks = [];
    const allTrucks = useSelector(selectAllTrucks);
    allTrucks.forEach(truck => {
        if (myLikedTrucksIds.includes(truck.objectId)) {
            myTrucks.push(truck)
        }
    });
    const hasLikes = myTrucks.length > 0;

    return (
        <>
            {
                hasLikes
                    ? <>
                        <h2 className="my-likes-title">off-road trucks that you like:</h2>
                        <section className="my-likes-wrapper">
                            {myTrucks.map(x => <CatalogCard key={x.objectId} truck={x} />)}
                        </section>
                    </>
                    : <section className="no-likes-wrapper">
                        <h2 className="no-likes-title">no likes ?</h2>
                        <h2 className="no-likes-title">go ahead !</h2>
                        <Link to={'/catalog'}>Click here!</Link>
                    </section>
            }
        </>
    )
}

export default MyLikes;