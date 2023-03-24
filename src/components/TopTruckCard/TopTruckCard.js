import "./TopTruckCard.css";

const TopTruckCard = () => {
    return (
        <article className="details-card-wrapper">
            <article className="details-card">
                <div className="details-card-img-wrapper">
                    <img src="./images/offroadbg2.jpg" alt="truck" />
                </div>
                <div className="details-card-content-wrapper">
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Brand :</h4>
                        <p className='details-card-content-result'> BMW</p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Model:</h4>
                        <p className='details-card-content-result'> X5</p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>year:</h4>
                        <p className='details-card-content-result'> 2005</p>
                    </article>
                    <article className='details-card-content'>
                        <h4 className='details-card-content-title'>Price:</h4>
                        <p className='details-card-content-result'> 20000</p>
                    </article>
                    <p className='details-card-content-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Suscipit aspernatur impedit voluptate qui aliquid id, tenetur iusto
                         consectetur placeat illum fugiat sunt aut, quasi odio ducimus.
                          Dolor sed praesentium reprehenderit.
                           </p>
                </div>
            </article>
            <article className='details-card-owner'>
                <h1 className='details-card-owner-name'>added by: Alek </h1>
                <section className="details-card-likes">
                    <article className="details-card-likes-count">6 Likes !</article>
                    <article className="details-card-medal-wrapper">
                        <img src="./images/medal.png" alt="medal" />
                        <p className="place">1</p>
                    </article>
                </section>
            </article>
        </article>
    )
}

export default TopTruckCard;