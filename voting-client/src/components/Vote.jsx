import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class Vote extends React.Component {
        constructor(props){
        super(props)
        this.getPair = this.getPair.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
        this.hasVotedFor = this.hasVotedFor.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    getPair() {
        console.log(this.props)
        return this.props.pair || [];
    }
    isDisabled(){
        return !!this.props.hasVoted;
    }
    hasVotedFor(entry){
        return this.props.hasVoted === entry;
    }
    render() {
        var entries = this.getPair()
        const me = this;
        return <div className='voting'>
                {entries.map(entry => <button key={entry}
                        disabled={me.isDisabled()}
                        onClick={() => this.props.vote(entry)}>
                    <h1 >{entry}</h1>
                        {me.hasVotedFor(entry) 
                            ? <div className="label">Voted</div>
                            : null}
                </button>)}
        </div>
    }
    
}

export default Vote;