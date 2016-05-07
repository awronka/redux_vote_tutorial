import React from 'react';
import Winner from './winner';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Vote from './Vote';

class Voting extends React.Component {
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
export default Voting;