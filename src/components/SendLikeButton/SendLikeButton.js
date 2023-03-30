import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { fetchAddLikes, getTruckLikes,fetchDeleteLike } from "../../redux/features/likesSlice";
import "./SendLikeButton.css";


const SendLikeButton = () => {
    const { user } = useContext(AuthContext);
    const truckId = useParams();
    const currentTruckLikes = useSelector((state) => getTruckLikes(state, truckId.objectId, user.objectId));
    const isLiked = currentTruckLikes.length === 0;
   
    const likeId = function (){
        if(!isLiked){
            const id = currentTruckLikes[0].objectId;
            return id
        }
    }
    
    const dispatch = useDispatch();

    const onClickLikeHandler = () => {
        const newComment = {
            truckId: truckId.objectId,
            userId: user.objectId
        }
        async function addLikes() {
            dispatch(fetchAddLikes(newComment));
        }
        addLikes();
    };

    const onClickDislikeHandler = () => {
    const currentLikeId = likeId();
        dispatch(fetchDeleteLike(currentLikeId));
    }


    return (
        <>
            {isLiked
               ? <article className="send-like-btn-wrapper">
                    <i className="fa-solid fa-thumbs-up fa-beat" onClick={onClickLikeHandler}></i>
                </article>
                : <article className="send-dislike-btn-wrapper">
                    <i className="fa-solid fa-thumbs-up fa-rotate-180" onClick={onClickDislikeHandler}></i>
                </article>
            }
        </>
    )
}

export default SendLikeButton;
