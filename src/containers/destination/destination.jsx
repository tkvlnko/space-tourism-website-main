import jsonData from '../../data.json';
import React, { useState } from 'react';
import "./destination.css"


const Destination = () => {
    const { destinations } = jsonData;
    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

    const handleClick = (destination) => {
    setSelectedDestination(destination);
    };

return (
    <div id="destination">
        <div className='destinaitons-list'>
            {destinations.map((destination, index) => (
            <a key={index} onClick={() => handleClick(destination)}>
                {destination.name}
            </a>
            ))}
        </div>
        
            
        

    {selectedDestination && (
        <div className='destination-item'>
            <h2>{selectedDestination.name}</h2>
            <p>{selectedDestination.description}</p>
            <p>Distance: {selectedDestination.distance}</p>
            <p>Travel Time: {selectedDestination.travel}</p>
            <img src={selectedDestination.images.png} alt='destination'/>
        </div>
    )}
    </div>
    );
};

export default Destination;
