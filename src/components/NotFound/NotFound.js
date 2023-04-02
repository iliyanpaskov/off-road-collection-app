import "./NotFound.css";

const NotFound = () => {
    return (
        <section className="not-found">
            <article className="not-found-img-wrapper">
                <img src='./images/jeep.jpg' alt="404" />
            </article>
            <h1 className="not-found-title"><span className="not-found-title-red">404</span> page not found!</h1>
        </section>
    )
}

export default NotFound;