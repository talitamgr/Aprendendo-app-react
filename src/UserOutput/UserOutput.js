import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className = "UserOutput">
            <p>O que é um pontinho rosa na madeira?</p>
            <p>É um cupink. by: {props.userName}</p>

        </div>

    );

};

export default userOutput;