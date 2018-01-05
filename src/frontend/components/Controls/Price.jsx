import React, { PureComponent } from 'react';
import styles from './price.scss';

export default class Price extends PureComponent {

    render() {
        const { children } = this.props;
        
        return <label className={styles.price}>{children}</label>;
    }
}