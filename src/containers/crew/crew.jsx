import jsonData from '../../data.json';
import React, { useState } from 'react';
import Heading from '../../components/heading/heading';


import "./crew.css";
import "../../App.css";

const Crew = () => {
    const { crew  } = jsonData;
    const [selectedMember, setSelectedMember] = useState(crew[0]);

    const handleClick = (member) => {
        setSelectedMember(member);
    };

    return (
        <section id="crew" className='section__padding section__bg'>
            <Heading number="02" text="Meet your crew" />
            {selectedMember && (
                <div className='member-info'>
                    <div className='member-info-text'>
                        <h4>{selectedMember.role}</h4>
                        <h3>{selectedMember.name}</h3>
                        <p>Bio: {selectedMember.bio}</p>
                    </div>
                    <img src={selectedMember.images.png} alt='destination'/>
                </div>
            )}
            <div className='members-list'>
                        {crew.map(({ name }, index) => (
                            <div key={index} onClick={() => handleClick(crew[index])}
                                className={`${selectedMember === crew[index] ? 'crew-list-selected' : ''} crew-list-item `}>
                            </div>
                        ))}
                </div>
                {selectedMember ? (
                    <div className='crew-mobile-img'>
                            <img src={selectedMember.images.png} alt='crew-member' />
                    </div>
                ) : null}
            </section>
    );
};

export default Crew;
