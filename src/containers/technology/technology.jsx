import jsonData from '../../data.json';
import React, { useState } from 'react';
import "./technology.css";


const Technology = () => {
    const technology = jsonData.technology;
    const [selectedTechnology, setSelectedTechnology] = useState(null);

    const handleClick = (technology) => {
        setSelectedTechnology(technology);
    };

return (
    <div id="technology">
        <ul>
            {technology.map((technology, index) => (
            <li key={index} onClick={() => handleClick(technology)} className={selectedTechnology === technology ? 'selected' : ''}>
                {index}
            </li>
            ))}
        </ul>

        {selectedTechnology && <div>
            <h1>{selectedTechnology.name}</h1>
            <p>Description:{selectedTechnology.description}</p>
            <img src={selectedTechnology.images.landscape} alt='technology'/>
        </div>}
        
        </div>
    );
};

export default Technology;
