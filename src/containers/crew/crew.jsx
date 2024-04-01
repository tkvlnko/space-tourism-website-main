import jsonData from '../../data.json';
import React, { useState } from 'react';
import "./crew.css";
import "../../App.css";


const Crew = () => {
    const crew = jsonData.crew;
    const [selectedMember, setSelectedMember] = useState(0);

    const handleNextClick = () => {
        setSelectedMember((selectedMember + 1) % crew.length);
        console.log(selectedMember);
    };

    const handlePreviousClick = () => {
        if (selectedMember === 0) {
            setSelectedMember((crew.length - 1));
        } else {
            setSelectedMember((selectedMember - 1));
        }
    };

return (
    <div id="crew">
        <button onClick={() => handleNextClick()}>next</button>
        <ul>
            {crew.map((member, index) => (
                <li key={index} className={selectedMember === index ? 'selected' : ''}>
                    {index + 1}
                </li>
            ))}
        </ul>
        <button onClick={() => handlePreviousClick()}>previous</button>

        {}
        <div>
            <h1>{crew[selectedMember].name}</h1>
            <p>{crew[selectedMember].role}</p>
            <p>Bio: {crew[selectedMember].bio}</p>
            <img src={crew[selectedMember].images.png} alt='destination'/>
        </div>

        </div>
    );
};

export default Crew;
