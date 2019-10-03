import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/theme.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import App from './user-interface/containers/App/App';

import configureStore from './store/index';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
