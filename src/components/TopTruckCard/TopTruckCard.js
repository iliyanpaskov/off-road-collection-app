import "./TopTruckCard.css";

const TopTruckCard = ({
    truck,
    i
}) => {

    return (
        <article className="details-card-wrapper">
            <article className="details-card">
                <div className="details-card-img-wrapper">
                    <img src={`${truck.image.url}`} alt="truck" />
                </div>
                <div className="details-card-content-wrapper">
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Brand :</h4>
                        <p className='details-card-content-result'> {truck.brand} </p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Model:</h4>
                        <p className='details-card-content-result'> {truck.model}</p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>year:</h4>
                        <p className='details-card-content-result'> {truck.year}</p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Price:</h4>
                        <p className='details-card-content-result'> {truck.price}</p>
                    </article>
                    <p className='details-card-content-text'>{truck.information} </p>
                </div>
            </article>
            <article className='details-card-owner'>
                <h1 className='details-card-owner-name'>{`added by: ${truck.ownerName}`} </h1>
                <section className="details-card-likes">
                    <article className="details-card-likes-count">{`${truck.likes.length} Likes !`}</article>
                    <article className="details-card-medal-wrapper">
                        <img src="./images/medal.png" alt="medal" />
                        <p className="place">{i}</p>
                    </article>
                </section>
            </article>
        </article>
    )
}

export default TopTruckCard;