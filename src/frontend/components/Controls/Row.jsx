import React from 'react';
import deleteProps from 'helpers/deleteProps.js';

export default (props) => (
    <div 
        className={`row ${props.className ? props.className : ''}`}
        {...deleteProps(props, 'className')}
    >{props.children}</div>
);