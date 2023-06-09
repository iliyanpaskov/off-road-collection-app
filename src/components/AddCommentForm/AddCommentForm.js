import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddComment } from "../../redux/features/commentsSlice";
import { happyNotification } from "../../services/notificationServices";
import { getUser } from "../../redux/features/userSlice";
import "../Forms.css";

const AddCommentForm = () => {
    const truckId = useParams().objectId;
    const user = useSelector(getUser);
    const username = user.username;
    const dispatch = useDispatch();

    const validate = values => {
        const errors = {};
        if (!values.comment) {
            errors.comment = 'You can\'t send empty comment !';
        } else if (values.comment.length > 100) {
            errors.comment = 'This comment is too long!';
        }
    };

    const formik = useFormik({
        initialValues: {
            truckId,
            username,
            comment: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            const addNewComment = async () => {
                dispatch(fetchAddComment(values));
            }
            addNewComment();
            resetForm({ values: "" });
            happyNotification('Comment added !');
        }
    });

    return (
        <section className="form-wapper">
            <h2 className="form-title add-comment-form-title"> add comment here:</h2>
            <form className="form" id="add-form" onSubmit={formik.handleSubmit}>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="comment"></label>
                    <textarea className="form-input form-textarea"
                        name="comment"
                        id="comment"
                        form="add-form"
                        placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nulla odio, distinctio odit impedit."
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    >
                    </textarea>
                </article>
                {
                    formik.touched.comment && formik.errors.comment
                        ? <div className="form-error">{formik.errors.comment}</div>
                        : null
                }
                <article className="form-label-input-wrapper add-comment-form-btn" >
                    <input className="form-submit-btn" type="submit" value={"Send"} />
                </article>
            </form>
        </section>
    )
}

export default AddCommentForm;