import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class winner extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render () {
        return <div className="winner">
        winner is {this.props.winner}!
        </div>;
    }
};