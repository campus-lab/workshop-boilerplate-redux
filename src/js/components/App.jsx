'use strict';

import React from 'react';

import {connect} from 'react-redux';
import {goatAdd} from '../actions';

import Title from './Title';
import GoatList from '../containers/GoatList';

const newGoat = {
    url: 'http://m.memegen.com/vqiz5i.jpg',
    displayName: 'Brah',
    description: 'Goatz to step up your game braaaahhhh!',
    published: 0
};

let App = ({dispatch}) => {
    return (
        <div>
            <div><Title /></div>
            <div><GoatList /></div>
            <div><button type="button" className="button expand large" onClick={e => {dispatch(goatAdd(newGoat))}}>ADD KRAZY GOATZ!</button></div>
        </div>
    );
};

App = connect()(App);

export default App;
