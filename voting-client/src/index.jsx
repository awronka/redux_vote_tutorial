import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDom.render(
    <Voting pair={pair} />,
    document.getElementById('app')
);