import React from 'react';

import './Char.css';

const char = (props) => {
    return (
        <div class="Char">
            <p>{props.character}</p>
        </div>
    )
};


export default char;