import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Voting.jsx';

const pair = [
    {film :'Trainspotting',
     _id: 1},
    {film :'28 Days Later',
     _id: 2}
    ];

ReactDom.render(
    <Voting pair={pair} />,
    document.getElementById('app')
);