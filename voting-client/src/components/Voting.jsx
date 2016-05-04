import React from 'react';

class Voting extends React.Component {
    constructor(props){
        super(props)
        this.state = {pair : props.pair}
        this.getPair = this.getPair.bind(this);
    }
    getPair() {
        return this.props.pair || [];
    }
    render() {
        return <div className='voting'>
            {this.getPair().map((entry, key) => <button>
                <h1> {entry}</h1>
                </button>)}
        </div>
    }
    
}

export default Voting;