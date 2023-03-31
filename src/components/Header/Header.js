import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo/Logo';
import './Header.css';

const Header = () => {
    const { user, logoutData, isAuthenticated } = useContext(AuthContext);

    const logoutHandler = () => {
        logoutData();
    }

    const GuestHeaderOptions = () => {
        return (
            <div className="header-dropdown header-dropdown-right">
                <Link to={'/login'}>login</Link>
                <Link to={'/sign-up'}>sign up</Link>
            </div>
        )
    }

    const UserHeaderOptions = () => {
        return (
            <div className="header-dropdown header-dropdown-right">
                <Link to={'/my-likes'}>my-likes</Link>
                <Link to={'/'} onClick={logoutHandler}>logout</Link>
            </div>
        )
    }

    return (
        <section className='header-wrapper'>
            <section className='header-lists-wrapper'>
                <ul className='header-list'>
                    <i className="fa-solid fa-house-chimney">
                        <div className="header-dropdown header-dropdown-left">
                            <Link to={'/'}>home</Link>
                            <Link to={'/catalog'}>all off-road trukcs</Link>
                            <Link to={'/best-trucks'}>top 3 trucks</Link>
                        </div>
                    </i>
                    {
                        isAuthenticated
                            ? <h3>welcome {user.username}</h3>
                            : null
                    }
                </ul>
                <article className='header-title-wrapper'>
                    <h1 className='header-title'>No Road</h1>
                    <h1 className='header-title'>No problem</h1>
                </article>
                <ul className='header-list'>
                    {
                        isAuthenticated
                            ? <h3 className='header-list-username'>welcome {user.username}</h3>
                            : null
                    }
                    <i className="fa-regular fa-circle-user">
                        {
                            isAuthenticated
                                ? <UserHeaderOptions />
                                : <GuestHeaderOptions />
                        }
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
