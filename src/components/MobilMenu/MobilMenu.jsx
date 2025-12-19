import './mobilMenu.css';
import { IoClose } from 'react-icons/io5';
import logo from '../../assets/Logo.svg';

const MobilMenu = ({ onClose, isOpen }) => {
    return (
        <div className={`mobil-menu ${isOpen ? 'mobil-menu--open' : ''}`}>
            <div className="mobil-menu__header">
                 <img className='header__logo' src={logo} alt="Logo" />
                <IoClose size={30} onClick={onClose} style={{ cursor: 'pointer' }} />
            </div>
            <ul className="mobil-menu__list">
                <li className="mobil-menu__item">Demos</li>
                <li className="mobil-menu__item">Demos</li>
                <li className="mobil-menu__item">Features</li>
                <li className="mobil-menu__item">Categories</li>
                <li className="mobil-menu__item">Shop</li>
                <li className="mobil-menu__item mobil-menu__item_border">Buy Now</li>
            </ul>
        </div>
    );
};

export default MobilMenu;