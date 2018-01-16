const React = require('react');
const ReactDOM = require('react-dom/server');
import JspReplace from 'frontend/jsp_replace';
import path from 'path';
import configureStore from 'store';
import { Provider } from 'react-redux';
import App from 'frontend/App.jsx';

module.exports = (req, res) => {
    const store = configureStore();
    const JspVars = new JspReplace({
        entry: path.resolve(__dirname, '../../frontend/template', 'index.html')
    });
    const version = require('../../../package.json').version;
    JspVars.replace('{version}',  version);
    let publicPath = '/assets';

    JspVars
        .replace('${link-path}', `<link async rel="stylesheet" href="${publicPath}/css/styles.min.css?v=${version}">`);
    

    JspVars.replace('${js-path}', publicPath + '/js/');

    const componentHTML = ReactDOM.renderToString(
        <Provider store={store}>
            <App />
        </Provider>  
    );   

    JspVars.replace('${content}', componentHTML);
    res.end(JspVars.getText());
};