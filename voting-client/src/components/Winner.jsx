import React from 'react';

export default class winner extends React.Component{
    constructor(props){
        super(props)
    }
    render () {
        return <div className="winner">
        winner is {this.props.winner}!
        </div>;
    }
};