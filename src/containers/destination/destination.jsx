import jsonData from '../../data.json';
import React, { useState } from 'react';


const Destination = () => {
    const destinations = jsonData.destinations;
    const [selectedDestination, setSelectedDestination] = useState(null);

    const handleClick = (destination) => {
    setSelectedDestination(destination);
    };

    console.log(selectedDestination)

return (
    <div id="destination">
        <ul>
            {destinations.map((destination, index) => (
            <li key={index} onClick={() => handleClick(destination)}>
                {destination.name}
            </li>
            ))}
        </ul>

    {selectedDestination && (
        <div>
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
