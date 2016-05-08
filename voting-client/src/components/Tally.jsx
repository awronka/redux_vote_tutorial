import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Tally extends React.Component{
    constructor(props){
        super(props)
        this.getPair = this.getPair.bind(this);
        this.getVotes = this.getVotes.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    getPair () {
        return this.props.pair || [];
    }
    getVotes(entry) {
        if(this.props.tally && this.props.tally.has(entry)){
            return this.props.tally.get(entry);
        }
        return 0;
    }
    render(){
        return <div className="results">
                    <div className="tally">
                        {this.getPair().map(entry =>
                        <div key={entry} className="entry">
                            <h1>{entry}</h1>
                            <div class="voteCount">
                            {this.getVotes(entry)}
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="management">
                        <button ref="next"
                                className="next"
                                onClick={this.props.next}>
                        Next
                        </button>
                    </div>
                </div>;
    }
}