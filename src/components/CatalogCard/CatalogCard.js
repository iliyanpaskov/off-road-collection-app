import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import './CatalogCard.css';


const CatalogCard = ({ truck }) => {

    const { isAuthenticated, user } = useContext(AuthContext);

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
                {isAuthenticated
                    ? <li className='card-btns-list-item details-btn'>
                        <Link to={`${truck.objectId}`}>details</Link>
                    </li>
                    : null
                }
                {isAuthenticated && truck.ownerId === user.objectId
                    ? <li className='card-btns-list-item update-btn'>
                        <Link to={'/'}>update</Link>
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