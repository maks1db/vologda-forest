import React from 'react';
import Main from 'containers/Main.jsx';
import Layout from 'containers/Layout.jsx';

export default class App extends React.Component{

    constructor() {
        super();
    }

    render() { 
        return <Layout><Main /></Layout>;
    }
}