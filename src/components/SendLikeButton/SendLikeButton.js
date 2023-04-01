import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchAddLikes, getTruckLikes, fetchDeleteLike } from "../../redux/features/likesSlice";
import { happyNotification, sadNotification } from "../../services/notificationServices";
import Modal from "../Modal/Modal";
import "./SendLikeButton.css";
import { getUser } from "../../redux/features/userSlice";


const SendLikeButton = () => {
    const user = useSelector(getUser);
    const [openModal, setOpenModal] = useState(false);
    const truckId = useParams();
    const currentTruckLikes = useSelector((state) => getTruckLikes(state, truckId.objectId, user.objectId));
    const isLiked = currentTruckLikes.length === 0;
    const message = "dislikes this truck";

    const likeId = function () {
        if (!isLiked) {
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
        happyNotification('Thanks for your like !!!');
    };

    const openModalHandler = () => {
        setOpenModal(true)
    }

    const onClickDislikeHandler = () => {
        const currentLikeId = likeId();
        dispatch(fetchDeleteLike(currentLikeId));
        setOpenModal(false);
        sadNotification('Your like was removed !')
    }

    return (
        <>
            {user.isAuthenticated
                ? <>
                    {isLiked
                        ? <article className="send-like-btn-wrapper">
                            <i className="fa-solid fa-thumbs-up fa-beat" onClick={onClickLikeHandler}></i>
                        </article>
                        : <article className="send-dislike-btn-wrapper">
                            <i className="fa-solid fa-thumbs-up fa-rotate-180" onClick={openModalHandler}></i>
                        </article>
                    }
                </>
                : null
            }
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onDelete={() => onClickDislikeHandler()}
                message={message}
            />
        </>
    )
}

export default SendLikeButton;
