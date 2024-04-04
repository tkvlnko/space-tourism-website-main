import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let selected = 'home';

            sections.forEach(section => {
                const { top, bottom } = section.getBoundingClientRect();
                const offsetY = window.scrollY;

                if (top <= 0 && bottom > 0 && offsetY > top) {
                    selected = section.id;
                }
            });

            setSelectedItem(selected);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                        <p><span style={{ opacity: 1}}>{item.number}</span>{item.label}</p>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
