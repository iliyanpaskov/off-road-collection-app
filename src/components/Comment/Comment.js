import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../services/userServices";
import { commentRemoved ,fetchDeleteComment} from "../../redux/features/commentsSlice";
import "./Comment.css";

const Comment = ({ comment }) => {
    const { user } = useContext(AuthContext);
    const isAuthor = comment.username === user.username;
    const dispatch = useDispatch();

    const deleteHandler = () => {
        // deleteComment(comment.objectId);
        // dispatch(commentRemoved(comment.objectId));
        dispatch(fetchDeleteComment(comment.objectId));
    }
    return (
        <article className="comment-wrapper">
            <p className="comment-content">{comment.comment}</p>
            <p className="comment-author">{comment.username}</p>
            {
                isAuthor
                    ? <i className="fa-sharp fa-regular fa-circle-xmark delete-comment" onClick={deleteHandler}></i>
                    : null
            }
        </article>
    )
}
export default Comment;