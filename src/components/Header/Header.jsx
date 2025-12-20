import logo from '../../assets/Logo.svg';
import { FaSearch } from "react-icons/fa";
import './header.css';
import Container from '../Container/Container';
import { IoMenuSharp } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import MobilMenu from '../MobilMenu/MobilMenu';

const Header = ({ searchInput, setSearchInput }) => {
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
      }
      if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="header" >
        <div className='header__logo-search'>
          <Container>
            <div className='header__logo-search-wrapper'>
              <div className='header__menuSharp'>
                <IoMenuSharp size={25} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer' }} />
              </div>
              <div className='header__logo-wrapper'>
                <img className='header__logo' src={logo} alt="Logo" />
              </div>
              {
                isOpenSearch ? (
                  <input
                    type="text"
                    className="header__search-input"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onBlur={() => setIsOpenSearch(false)}
                  />
                ) : (
                  <div className='header__search-icon' onClick={() => setIsOpenSearch(true)} >
                    <FaSearch />
                  </div>
                )
              }
            </div>
          </Container>
        </div>
        <div className={`header__menu ${hidden ? "header__menu--hidden" : ""}`}>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>Demos</li>
            <li className='header__menu-item'>Demos</li>
            <li className='header__menu-item'>Features</li>
            <li className='header__menu-item'>Categories</li>
            <li className='header__menu-item'>Shop</li>
            <li className='header__menu-item'>Buy Now</li>
          </ul>
        </div>
      </header>
      <MobilMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
export default Header;