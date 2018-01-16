import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store';

if (process.env.BROWSER) {
    require('scss/index.scss');
    require('bootstrap/dist/css/bootstrap.css');
    require('font-awesome/css/font-awesome.css');
    require('react-redux-toastr/lib/css/react-redux-toastr.min.css');
    require('animate.css/animate.min.css');
}


const store = configureStore(history);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>
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