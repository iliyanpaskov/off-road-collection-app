import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/features/userSlice';
import './CatalogCard.css';

const CatalogCard = ({ truck }) => {
    const user = useSelector(getUser);

    return (
        <section className='card-wrapper'>
            <div className='card-img-wrapper'>
                <img src={truck.image.url} alt="offroad-truck" />
            </div>
            <div className='card-content-wrapper'>
                <article className='card-content'>
                    <h4 className='card-content-title'>Brand:</h4>
                    <p className='card-content-result'> {truck.brand}</p>
                </article>
                <article className='card-content'>
                    <h4 className='card-content-title'>Model:</h4>
                    <p className='card-content-result'> {truck.model}</p>
                </article>
                <article className='card-content'>
                    <h4 className='card-content-title'>year:</h4>
                    <p className='card-content-result'>  {truck.year}</p>
                </article>
            </div>
            <ul className='card-btns-list'>
                {user.isAuthenticated
                    ? <li className='card-btns-list-item'>
                        <Link to={`${truck.objectId}`}>details</Link>
                    </li>
                    : null
                }
            </ul>
            <article className='card-owner'>
                <h1 className='card-owner-name'>{`added by:  ${truck.ownerName}`}</h1>
            </article>
        </section>
    )
}

export default CatalogCard;