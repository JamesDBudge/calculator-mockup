import React from 'react';
import './DoubleWideButton.css';

const DoubleWideButton = props => (
    <div className={`double-wide-button`}
    onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)

export default DoubleWideButton;