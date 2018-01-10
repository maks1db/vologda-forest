import React, { Component } from 'react';
import MainScreen from 'Layout/MainScreen.jsx';
import Header from 'Layout/Header.jsx';

export default class Layout extends Component {

    render() {

        const { children } = this.props;
        return (
            <MainScreen>
                <Header />
                <div>{children}</div>
            </MainScreen>
        );
    }
}