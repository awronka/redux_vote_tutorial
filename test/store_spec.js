import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';


describe('store', () => {
    it('is a Rediux store configured with the correct answer', () => {
        const store = makeStore();
        expect(store.getState()).to.equal(Map());
        
        store.dispatch({
            type: 'SET_ENTRIES',
            entries: ['Simpsons' , 'Monkey']
        });
        expect(store.getState()).to.equal(fromJS({
            entries: ['Simpsons', 'Monkey']
        }))
    })
})