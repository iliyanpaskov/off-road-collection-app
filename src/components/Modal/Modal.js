import Logo from "../common/Logo/Logo";
import "./Modal.css";

const Modal = ({ open, onClose, onDelete }) => {

    if (!open) {
        return null;
    }

    return (
        <section className="modal-wrapper">
            <article className="modal">
                <Logo />
                <p className="modal-content">Are you sure you want to delete your comment?</p>
                <article className="modal-btns-wrapper">
                    <button className="modal-btn confirm-btn" onClick={onDelete}>yes</button>
                    <button className="modal-btn reject-btn" onClick={onClose}>no</button>
                </article>
            </article>

        </section>
    )
}

export default Modal;