import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer-wrapper">
            <article className="footer">
                <h3 className="footer-title">no road <span>no problem</span></h3>
                <ul className="footer-social-media-list">
                    <li className="footer-social-media-list-item">
                        <i className="fa-brands fa-square-facebook"></i>
                    </li>
                    <li className="footer-social-media-list-item">
                        <i className="fa-brands fa-square-twitter"></i>
                    </li>
                    <li className="footer-social-media-list-item">
                        <i className="fa-brands fa-square-instagram"></i>
                    </li>
                    <li className="footer-social-media-list-item">
                        <i className="fa-brands fa-youtube"></i>
                    </li>
                </ul>
            </article>
            <p className="footer-text"> &copy; All rights reserved !</p>
        </section>
    )
}

export default Footer;