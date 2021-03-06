import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers';
import App from './components/App';

require('../scss/stylesheet.scss');

let store = createStore(Reducers);

render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
);
