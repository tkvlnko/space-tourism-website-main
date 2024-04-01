import React, { useState } from 'react';
// import logo from '../../../public/assets/shared/logo.svg';
import './navbar.css';
require('../../App.css');


const Navbar = () => {
    const logo = process.env.PUBLIC_URL + '/assets/shared/logo.svg';

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'destination', label: 'Destination' },
        { id: 'crew', label: 'Crew' },
        { id: 'technology', label: 'Technology' }
    ];
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (itemId) => {
        setSelectedItem(itemId);
    };

    return (
        <nav className='nav'>
            <img src={logo} alt="Logo" />
            <div className='menu-desktop'>
                {menuItems.map(item => (
                    <a 
                        key={item.id} 
                        href={`#${item.id}`} 
                        onClick={() => handleClick(item.id)} 
                        className={selectedItem === item.id ? 'menu-selected' : ''}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
