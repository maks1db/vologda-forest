import React, { PureComponent } from 'react';

if (process.env.BROWSER) {
    require('./price.scss');
}


export default class Price extends PureComponent {

    render() {
        const { children } = this.props;
        
        return <label className="price">{children}</label>;
    }
}