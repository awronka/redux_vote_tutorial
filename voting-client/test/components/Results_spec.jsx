import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {Results} from '../../src/components/Results';
import Tally from '../../src/components/Tally';
import {expect} from 'chai';

describe('Results', () => {
    it('renders entries with vote counts or zero',() => {
        const pair = List.of('simpsons','fullhouse');
        const tally = Map({'simpsons' : 5});
        const component = renderIntoDocument(
            <Results pair={pair} tally ={tally}/>
        );
        
        const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
        const [simp,full] = entries.map(e => e.textContent);
        
        expect(entries.length).to.equal(2);
        expect(simp).to.contain('simpsons');
        expect(simp).to.contain('5');
        expect(full).to.contain('fullhouse');
        expect(full).to.contain('0');
        
    })
    
    it('invokes the next callback when next button is clicked', () => {
        let nextInvoked = false;
        const next = () => nextInvoked = true;

        const pair = List.of('Trainspotting', '28 Days Later');
        const component = renderIntoDocument(
        <Tally pair={pair}
                tally={Map()}
                next={next}/>
        );
        Simulate.click(ReactDOM.findDOMNode(component.refs.next));

        expect(nextInvoked).to.equal(true);
  });
    
    it('renders the winner when there is one', () => {
        const component = renderIntoDocument(
            <Results winner="Trainspotting"
                    pair={["Trainspotting", "28 Days Later"]}
                    tally={Map()} />
        );
        const winner = ReactDOM.findDOMNode(component.refs.winner);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Trainspotting');
    });
})