import Logo from '../common/Logo/Logo';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className='header-wrapper'>
            <section className='header-lists-wrapper'>
                <ul className='header-list'>
                    <i className="fa-solid fa-house-chimney">
                        <div className="header-dropdown header-dropdown-left">
                            <Link to={'/'}>home</Link>
                            <Link to={'/catalog'}>all off-road trukcs</Link>
                            <Link to={'/'}>top 3 trucks</Link>
                        </div>
                    </i>
                </ul>
                <ul className='header-list'>
                    <i className="fa-regular fa-circle-user">
                        <div className="header-dropdown header-dropdown-right">
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
