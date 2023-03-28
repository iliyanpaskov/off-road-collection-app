import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectById, fetchTrucks } from "../../redux/features/trucksSlice";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateTruck } from "../../services/userServices";
import { store } from "../../redux/store";
import "./SendLikeButton.css";


const SendLikeButton = () => {
    const { user } = useContext(AuthContext);
    const truckId = useParams();
    const truckLikes = useSelector((state) => selectById(state, truckId.objectId)).likes;
    const dispatch = useDispatch();
    const isLiked = truckLikes.includes(user.objectId);
    const onClickHandler = () => {
        async function addLikes() {
            const values = [...truckLikes, user.objectId]
            const result = await updateTruck(truckId.objectId, values);
            store.dispatch(fetchTrucks());
            console.log(result);
            console.log(truckId);

        }
        addLikes();
    };
    return (
        <>
            {!isLiked
                ? <article className="send-like-btn-wrapper">
                    <i className="fa-solid fa-thumbs-up fa-beat" onClick={onClickHandler}></i>
                </article>
                : null
            }
        </>
    )
}

export default SendLikeButton;
