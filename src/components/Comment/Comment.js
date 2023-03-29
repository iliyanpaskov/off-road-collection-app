import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Comment.css";

const Comment = ({ comment }) => {
    const { user } = useContext(AuthContext);
    const isAuthor = comment.username === user.username;
    const f = () => console.log(comment.objectId);
    return (
        <article className="comment-wrapper">
            <p className="comment-content">{comment.comment}</p>
            <p className="comment-author">{comment.username}</p>
            {
                isAuthor
                    ? <i className="fa-sharp fa-regular fa-circle-xmark delete-comment" onClick={f}></i>
                    : null
            }
        </article>
    )
}
export default Comment;