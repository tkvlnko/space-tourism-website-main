import jsonData from '../../data.json';
import React, { useState } from 'react';
import "./technology.css";
import Heading from '../../components/heading/heading';


const Technology = () => {
    const { technology } = jsonData;
    const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);

    const handleClick = (technology) => {
        setSelectedTechnology(technology);
    };

return (
    <section id="technology" className='section__padding section__bg'>
        <Heading number="03" text="Space launch 101"/>
            <div className='tech-content'>
            <ul>
                {technology.map((technology, index) => (
                <li key={index} onClick={() => handleClick(technology)} className={`${selectedTechnology === technology ? 'tech-item-selected' : ''} tech-item`}>
                    {index + 1}
                </li>
                ))}
            </ul>

            {selectedTechnology && <div className='tech-step'>
                <div className='text-step-info'>
                    <p className='sub-2'>the terminology...</p>
                    <h3>{selectedTechnology.name}</h3>
                    <p>{selectedTechnology.description}</p>
                </div>
                <img src={selectedTechnology.images.portrait} alt='technology'/>
            </div>}
        </div>
    </section>
    );
};

export default Technology;
