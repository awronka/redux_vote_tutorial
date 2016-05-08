import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Voting.jsx';
import {Router,Route,hashHistory} from 'react-router';
import App from './components/App';
import {ResultsContainer} from './components/Results';
import {VotingContainer} from './components/Voting';
import {setState} from './action_creators';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import io from 'socket.io-client';


const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => store.dispatch(setState(state)))

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer}/>
    <Route path="/" component={VotingContainer}/>
</Route>;

ReactDom.render(
   <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
   </Provider>,
   document.getElementById('app')
);