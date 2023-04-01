import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteComment } from "../../redux/features/commentsSlice";
import { sadNotification } from "../../services/notificationServices";
import Modal from "../Modal/Modal";
import "./Comment.css";
import { getUser } from "../../redux/features/userSlice";

const Comment = ({ comment }) => {
    const user = useSelector(getUser);
    const [openModal, setOpenModal] = useState(false);
    const isAuthor = comment.username === user.username;
    const dispatch = useDispatch();
    const message = "delete your comment";

    const openModalHandler = () => {
        setOpenModal(true);
    };

    const deleteHandler = () => {
        dispatch(fetchDeleteComment(comment.objectId));
        sadNotification('Comment was deleted !');
    };

    return (
        <>
            <article className="comment-wrapper">
                <p className="comment-content">{comment.comment}</p>
                <p className="comment-author">{comment.username}</p>
                {
                    isAuthor
                        ? <i className="fa-sharp fa-regular fa-circle-xmark delete-comment" onClick={openModalHandler}></i>
                        : null
                }
            </article>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onDelete={() => deleteHandler()}
                message={message}
            />
        </>
    )
}
export default Comment;