import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectById } from "../../redux/features/trucksSlice";
import SendLikeButton from "../SendLikeButton/SendLikeButton";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import "./DetailsCard.css";

const DetailsCard = () => {
    const truckId = useParams();
    const currentTruck = useSelector((state) => selectById(state, truckId.objectId));

    return (
        <section className="details-wrapper">
            <article className="details-card-wrapper">
                <article className="details-card">
                    <div className="details-card-img-wrapper">
                        <img src={`${currentTruck.image.url}`} alt="truck" />
                    </div>
                    <div className="details-card-content-wrapper">
                        <article className='details-card-content'>
                            <h4 className='details-card-content-title'>Brand :</h4>
                            <p className='details-card-content-result'> {currentTruck.brand}</p>
                        </article>
                        <article className='details-card-content'>
                            <h4 className='details-card-content-title'>Model:</h4>
                            <p className='details-card-content-result'> {currentTruck.model}</p>
                        </article>
                        <article className='details-card-content'>
                            <h4 className='details-card-content-title'>year:</h4>
                            <p className='details-card-content-result'> {currentTruck.year}</p>
                        </article>
                        <article className='details-card-content'>
                            <h4 className='details-card-content-title'>Price:</h4>
                            <p className='details-card-content-result'> {`$ ${currentTruck.price}`}</p>
                        </article>
                        <p className='details-card-content-text'>{currentTruck.information} </p>
                    </div>
                </article>
                <article className='details-card-owner'>
                    <SendLikeButton />
                    <h1 className='details-card-owner-name'>added by: {currentTruck.ownerName}</h1>
                </article>
            </article>

            <article className="comments-article-wrapper">
                <article className="comments-article">

                </article>

                <article className="add-comments-form-wrapper">
                    <AddCommentForm/>
                </article>
                
            </article>
        </section>
    )
}

export default DetailsCard;