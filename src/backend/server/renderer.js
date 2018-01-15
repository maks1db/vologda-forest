const React = require('react');
const ReactDOM = require('react-dom/server');
import configureStore from 'store';
import { Provider } from 'react-redux';
import App from 'frontend/App.jsx';

module.exports = (req, res) => {
    const store = configureStore();

    const componentHTML = ReactDOM.renderToString(
        <Provider store={store}>
            <App />
        </Provider>  
    );   
    console.log(componentHTML);
    res.end(componentHTML);
};