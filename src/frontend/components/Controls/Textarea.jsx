import React, { PureComponent } from 'react';
import MainInput from './MainInput.jsx';

export default class Textarea extends PureComponent {

    render() {
        return (
            <MainInput 
                control="textarea"
                {...this.props}
            />
        );
    }
}