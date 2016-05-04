import React from 'react';

class Voting extends React.Component {
    constructor(props){
        super(props)
        this.state = {pair : props.pair}
        this.getPair = this.getPair.bind(this);
    }
    getPair() {
        console.log(this.props, this.state)
        return this.state.pair || [];
    }
    render() {
        var entries = this.getPair()
        return <div className='voting'>
            {entries.map((entry) => <button key={entry._id}>
                <h1 >{entry.film}</h1>
                </button>)}
        </div>
    }
    
}

export default Voting;