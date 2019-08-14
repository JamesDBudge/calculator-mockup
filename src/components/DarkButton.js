import React from 'react';
import './DarkButton.css';

const DarkButton = props => (
    <div className={`button-dark`}>
        {props.children}
    </div>
)

export default DarkButton;