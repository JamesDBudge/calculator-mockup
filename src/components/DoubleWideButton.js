import React from 'react';
import './DoubleWideButton.css';

const DoubleWideButton = props => (
    <div className={`double-wide-button`}>
        {props.children}
    </div>
)

export default DoubleWideButton;