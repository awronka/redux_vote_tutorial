import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return React.cloneElement(this.props.children, {pair: pair});
    }
}