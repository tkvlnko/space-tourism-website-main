import React, { useState } from 'react';
// import logo from '../../../public/assets/shared/logo.svg';
import './navbar.css';
require('../../App.css');


const Navbar = () => {
    const logo = process.env.PUBLIC_URL + '/assets/shared/logo.svg';

    const menuItems = [
        { id: 'home', label: 'Home', number: '00' },
        { id: 'destination', label: 'Destination', number: '01' },
        { id: 'crew', label: 'Crew', number: '02' },
        { id: 'technology', label: 'Technology', number: '03' }
    ];
    const [selectedItem, setSelectedItem] = useState("home");

    const handleClick = (itemId) => {
        setSelectedItem(itemId);
    };

    return (
        <nav>
            <img src={logo} alt="Logo" />
            <div className='nav-line'></div>
            <div className='menu-desktop'>
                {menuItems.map(item => (
                    <a 
                        key={item.id} 
                        href={`#${item.id}`} 
                        onClick={() => handleClick(item.id)} 
                        className={`${selectedItem === item.id ? 'menu-selected' : ''} nav-item `}
                    >
                        <p><span>{item.number}</span>{item.label}</p>
                    </a>
                ))}
            </div>
            
        </nav>
    );
};

export default Navbar;
