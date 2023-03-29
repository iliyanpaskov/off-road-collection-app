import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectById, fetchTrucks } from "../../redux/features/trucksSlice";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateTruckLikes } from "../../services/userServices";
import { store } from "../../redux/store";
import "./SendLikeButton.css";


const SendLikeButton = () => {
    const { user } = useContext(AuthContext);
    const truckId = useParams();
    const truckLikes = useSelector((state) => selectById(state, truckId.objectId)).likes;
    const ownerId = useSelector((state) => selectById(state, truckId.objectId)).ownerId;
    const isLiked = truckLikes?.includes(user.objectId);
    const isOwner = user.objectId === ownerId;
    const onClickHandler = () => {
        console.log(ownerId);
        async function addLikes() {
            const values = [...truckLikes, user.objectId]
            await updateTruckLikes(truckId.objectId, values);
            store.dispatch(fetchTrucks());
        }
        addLikes();
    };
    return (
        <>
            {!isLiked && !isOwner
                ? <article className="send-like-btn-wrapper">
                    <i className="fa-solid fa-thumbs-up fa-beat" onClick={onClickHandler}></i>
                </article>
                : null
            }
        </>
    )
}

export default SendLikeButton;
