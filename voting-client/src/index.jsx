import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Voting.jsx';

const pair = [
    'Trainspotting',
    '28 Days Later'
    ];
let voteWith;
const voteFunc = (entry) => {
    voteWith = entry
    console.log(voteWith)
     return 
};
ReactDom.render(
    <Voting pair={pair} 
            hasVoted={voteWith} 
            vote={voteFunc}
            />,
    document.getElementById('app')
);