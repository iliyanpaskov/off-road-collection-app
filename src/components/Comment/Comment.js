import "./Comment.css";

const Comment = ({ comment }) => {
    return (
        <article className="comment-wrapper">
            <p className="comment-content">{comment.comment}</p>
            <p className="comment-author">{comment.username}</p>
            <i className="fa-sharp fa-regular fa-circle-xmark delete-comment"></i>
        </article>
    )
}
export default Comment;