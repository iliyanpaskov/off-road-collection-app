import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import { getAllUserLikes } from "../../redux/features/likesSlice";
import { selectAllTrucks } from "../../redux/features/trucksSlice";
import CatalogCard from "../CatalogCard/CatalogCard";
import "./MyLikes.css";

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

    return (
        <section className="my-likes-wrapper">
            {myTrucks.map(x => <CatalogCard key={x.objectId} truck={x} />)}
        </section>
    )
}

export default MyLikes;