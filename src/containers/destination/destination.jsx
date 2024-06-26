import React, { useState } from 'react';
import "./destination.css";
import jsonData from '../../data.json';
import Heading from '../../components/heading/heading';

const Destination = () => {
    const { destinations } = jsonData;
    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

    const handleClick = (destination) => {
        setSelectedDestination(destination);
    };

    return (
        <section id="destination" className='section__padding section__bg'>
            <Heading number="01" text="Pick your destination" />
            {selectedDestination ? (
                    <div className='destinaiton-mobile-img'>
                            <img src={selectedDestination.images.png} alt='destination' />
                    </div>
                ) : null}

            <div className='destinations-content'>
                <ul className='destinations-list'>
                    {destinations.map(({ name }, index) => (
                        <li key={index} onClick={() => handleClick(destinations[index])}
                            className={`${selectedDestination === destinations[index] ? 'destination-list-selected' : ''} destination-list-item `}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>

                {selectedDestination ? (
                    <div className='destination-item'>
                        <div className='destination-img-container'>
                            <img src={selectedDestination.images.png} alt='destination' />
                        </div>

                        <div className='destination-item-info'>
                            <h2>{selectedDestination.name}</h2>
                            <p>{selectedDestination.description}</p>
                            <div className='destination-line'></div>

                            <div className='destination-add-container'>
                                <div className='destination-add'>
                                    <p className='sub-2'>avg.distance</p>
                                    <p className='sub-1'>{selectedDestination.distance}</p>
                                </div>

                                <div className='destination-add'>
                                    <p className='sub-2'>Est. travel time</p>
                                    <p className='sub-1'>{selectedDestination.travel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default Destination;
