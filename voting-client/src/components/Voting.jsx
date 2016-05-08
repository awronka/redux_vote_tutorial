import React from 'react';
import Winner from './Winner';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Vote from './Vote';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export class Voting extends React.Component {
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return <div>
            {this.props.winner 
                ? <Winner winner={this.props.winner}/> 
                : <Vote {...this.props} /> }
                </div>
    
    }
}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner'),
        hasVoted: state.get('hasVoted')
    }
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
