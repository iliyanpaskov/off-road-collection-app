import Logo from '../common/Logo/Logo';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className='header-wrapper'>
            <section className='header-lists-wrapper'>
                <ul className='header-list'>
                    <li className='header-list-item'>
                        <Link to={'/'}>home</Link>
                    </li>
                    <li className='header-list-item'>
                        <Link to={'/catalog'}>all off-road trukcs</Link>
                    </li>
                    <li className='header-list-item'>
                        <Link to={'/'}>top 3 trucks</Link>
                    </li>
                </ul>
                <ul className='header-list'>
                    <i className="fa-regular fa-circle-user">
                        <div className="header-dropdown">
                            <Link to={'#'}>login</Link>
                            <Link to={'#'}>sign up</Link>
                            <Link to={'#'}>my-trucks</Link>
                            <Link to={'#'}>logout</Link>
                        </div>
                    </i>
                </ul>
                <div className='header-logo-wrapper'>
                    <Logo />
                </div>
            </section>
        </section>
    )
}

export default Header;
