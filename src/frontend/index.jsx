import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';

import 'scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'animate.css/animate.min.css';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>
        ,
        document.getElementById('root')
    );
};
  
render(App);
  
if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default;
        render(NextApp);
    });
}