import "./DetailsCard.css";

const DetailsCard = () => {
    return (
        <article className="details-card-wrapper">
            <article className="details-card">
                <div className="details-card-img-wrapper">
                    <img src="./images/offroadbg2.jpg" alt="" />
                </div>
                <div className="details-card-content-wrapper">
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Brand :</h4>
                        <p className='details-card-content-result'> jeep</p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Model:</h4>
                        <p className='details-card-content-result'> wrangler</p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>year:</h4>
                        <p className='details-card-content-result'> 2020</p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Price:</h4>
                        <p className='details-card-content-result'> {`$ ${110000}`}</p>
                    </article>

                    <p className='details-card-content-text'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore tempore aperiam,
                        magni cupiditate ex deserunt exercitationem nihil nesciunt aliquam nemo possimus porro
                        ullam repellendus minus earum? Repellendus error culpa minus eius quasi eligendi, odit quis
                        eum quod veritatis modi temporibus umenda est optio nihil distinctio asperiores excepturi
                        delectus numquam neque!
                    </p>
                </div>
            </article>
            <article className='details-card-owner'>
                <h1 className='details-card-owner-name'>added by: alek</h1>
            {/* <button>See collection</button> */}
            </article>
        </article>
    )

}

export default DetailsCard;