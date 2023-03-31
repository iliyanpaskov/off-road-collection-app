import "./Modal.css";

const Modal = ({ open, onClose, onDelete, message }) => {

    if (!open) {
        return null;
    }

    return (
        <section className="modal-wrapper">
            <article className="modal">
                <i className="fa-sharp fa-solid fa-x" onClick={onClose}></i>
                <p className="modal-content">Are you sure you want to <span className="modal-content-message">{message}</span>?</p>
                <article className="modal-btns-wrapper">
                    <button className="modal-btn confirm-btn" onClick={onDelete}>yes</button>
                    <button className="modal-btn reject-btn" onClick={onClose}>no</button>
                </article>
            </article>

        </section>
    )
}

export default Modal;