import React from 'react';
import Winner from './winner';
import Vote from './Vote';

class Voting extends React.Component {
    constructor(props){
        super(props)
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