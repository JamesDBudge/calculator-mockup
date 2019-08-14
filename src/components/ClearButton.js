import React from 'react';
import './DarkButton.css';

const ClearButton = props => (
    <div className={'button-dark'}
    onClick={() => props.handleClear()}
    >
        {props.children}
    </div>
)

export default ClearButton;