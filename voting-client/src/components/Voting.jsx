import React from 'react';

class Voting extends React.Component {
    constructor(props){
        super(props)
        this.getPair = this.getPair.bind(this);
    }
    getPair() {
        return this.props.pair || [];
    }
    render() {
        var entries = this.getPair()
        return <div className='voting'>
            {entries.map((entry) => 
                <button key={entry}
                        onClick={() => this.props.vote(entry)}>
                    <h1 >{entry}</h1>
                </button>)}
        </div>
    }
    
}

export default Voting;