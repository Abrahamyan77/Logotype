import logo from '../../assets/Logo.svg';
import { FaSearch } from "react-icons/fa";
import './header.css';
import Container from '../Container/Container';

const Header = () => {
    return (
        <header className="header">
            <div className='header__logo-search'>
                <Container>
                    <div className='header__logo-search-wrapper'>
                        <div className='header__logo-wrapper'>
                            <img className='header__logo' src={logo} alt="Logo" />
                        </div>

                        <div className='header__search-icon'>
                            <FaSearch />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='header__menu'></div>
        </header>
    );
};
export default Header;