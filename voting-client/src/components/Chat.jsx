import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';


export class Chat extends React.Component {
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render(){
        return <div >{this.props.pair}</div>;
    }
}

function mapStateToProps(state){
    return{
        pair: state.getIn(['vote', 'pair'])
    }
}

export const ChatContainer = connect(mapStateToProps, actionCreators)(Chat);