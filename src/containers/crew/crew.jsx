import jsonData from '../../data.json';
import React, { useState } from 'react';
import { Swipeable } from 'react-swipeable'; 

import "./crew.css";
import "../../App.css";


const Crew = () => {
    const { crew  } = jsonData;
    const [selectedMember, setSelectedMember] = useState(crew[0]);
    // console.log(selectedMember);

    const handleClick = (member) => {
        setSelectedMember(member);
    };


    
    // const handleNextClick = () => {
    //     setSelectedMember((selectedMember + 1) % crew.length);
    //     console.log(selectedMember);
    // };

    // const handlePreviousClick = () => {
    //     if (selectedMember === 0) {
    //         setSelectedMember((crew.length - 1));
    //     } else {
    //         setSelectedMember((selectedMember - 1));
    //     }
    // };

return (
    <section id="crew" className='section__padding section__bg'>
        
        <h5><span>02</span>Meet your crew</h5>

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

        </section>
    );
};

export default Crew;
