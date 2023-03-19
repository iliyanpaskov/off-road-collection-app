import { Link } from 'react-router-dom';
import './CatalogCard.css';

const CatalogCard = () => {
    return (
        <section className='card-wrapper'>
            <div className='card-img-wrapper'>
                <img src="./images/of6.jpg" alt="offroad-truck" />
            </div>
            <div className='card-content-wrapper'>
                <article className='card-content'>
                    <h4 className='card-content-title'>Brand:</h4>
                    <p className='card-content-result'> Ford</p>
                </article>
                <article className='card-content'>
                    <h4 className='card-content-title'>Model:</h4>
                    <p className='card-content-result'> F150</p>
                </article>
                <article className='card-content'>
                    <h4 className='card-content-title'>year:</h4>
                    <p className='card-content-result'> 2020</p>
                </article>
            </div>
            <ul className='card-btns-list'>
                <li className='card-btns-list-item details-btn'>
                    <Link to={'/'}>details</Link>
                </li>
                <li className='card-btns-list-item update-btn'>
                    <Link to={'/'}>update</Link>
                </li>
            </ul>
            <article className='card-owner'>
                <h1 className='card-owner-name'>added by: alek</h1>
            </article>
        </section>
    )
}

export default CatalogCard;