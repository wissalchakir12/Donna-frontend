import React, { useState } from 'react';
import logo from "../assets/Logo.jpg";
import { FaBars } from "react-icons/fa";  // Import only FaBars to keep it clean
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="Logo" className={styles.logoImage} style={{marginLeft:'30px'}} />
        </a>
      </div>
      <div style={{gap:'20px'}} className={`${styles.items} ${isOpen ? styles.open : ''}`}>
        <a href="#" style={{marginRight:'20px'}} className={styles.navLink} onClick={closeMenu}>Accueil</a>
        <a href="#" style={{marginRight:'30px'}}  className={styles.navLink} onClick={closeMenu}>Boutique</a>
        <a href="#"  style={{marginRight:'40px'}} className={styles.navLink} onClick={closeMenu}>A propos de nous</a>
        <a href="#" style={{marginRight:'50px'}} className={styles.navLink} onClick={closeMenu}>Contactez-nous</a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;