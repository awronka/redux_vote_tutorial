import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Tally from './Tally';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';


export class Results extends React.Component {
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return this.props.winner 
        ? <Winner ref="winner" winner={this.props.winner}/>
        : <Tally ref="tally" next={this.props.next} 
                             pair={this.props.pair}
                             tally={this.props.tally}/>
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner'),
        tally: state.getIn(['vote','tally'])
    }
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);