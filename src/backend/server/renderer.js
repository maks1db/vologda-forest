const React = require('react');
const ReactDOM = require('react-dom/server');
import Component from './Test.jsx';

module.exports = (req, res) => {
    const componentHTML = ReactDOM.renderToString(
        <Component />  
    );   
    console.log(componentHTML);
    res.end(componentHTML);
};