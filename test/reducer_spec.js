import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
    
    it ('handles SET_ENTRIES', () => {
        const initiateState = Map();
        const action = {type : 'SET_ENTRIES', entries: ['Trainspotting']};
        const nextState = reducer(initiateState, action);
        
        expect(nextState).to.equal(fromJS({
            entries: ['Trainspotting']
        }))    
    })
    
    it('handles NEXT', () => {
        const initialState = fromJS({
            entries: ['Trainspotting', 'Simpons']
        });
        const action ={type: 'NEXT'};
        const nextState = reducer(initialState, action);
        
        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Trainspotting', 'Simpons']
            },
            entries: []
        }))
    })
    
    it('handles VOTE', () => {
        const initialState = fromJS({
            vote: {
                pair: ['Trainspotting', 'Simpons']
            },
            entries: []
        });
        const action = {type: 'VOTE', entry :'Trainspotting'};
        const nextState = reducer(initialState, action);
        
        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Trainspotting','Simpons'],
                tally: {Trainspotting : 1}
            },
            entries: []
        }))
    })
    
    it('has an initial state', () => {
        const action = {'type' : 'SET_ENTRIES', entries : ['Trainspotting']}
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            entries : ['Trainspotting']
        }))
    })
    
    it('can be used with reduce', () => {
        const actions =[
            {type:  'SET_ENTRIES', entries : ['Simpons' , 'DarkSouls']},
            {type: 'NEXT'},
            {type: 'VOTE', entry: 'Simpons'},
            {type: 'VOTE', entry : 'DarkSouls'},
            {type: 'VOTE', entry : 'DarkSouls'},
            {type: 'NEXT'}
        ]
        const finalState = actions.reduce(reducer, Map());
        
        expect(finalState).to.equal(fromJS({
            winner: 'DarkSouls'
        }))
    })
})