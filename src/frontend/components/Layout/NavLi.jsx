import React from 'react';
import deleteProps from 'helpers/deleteProps.js';

export default ({title, ...props}) => (
    <li>
        <a 
            {...deleteProps(props, ['title'])}
        >
            {title}
        </a>
    </li>
);