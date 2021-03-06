import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries, next, vote} from '../src/core';

describe('application logic', () => {
	describe('set Entries', () => {

		it('converts to immutable', () => {
			const state = Map();
			const entries = ['Trainspotting', '28 Days Later'];
			const nextState = setEntries(state, entries);
			expect(nextState).to.equal(Map({
				entries: List.of('Trainspotting', "28 Days Later"),
				initialEntries: List.of('Trainspotting', "28 Days Later")
			}))
		})
	})
	
	describe('next functionality', () => {
		
		it('takes the next two entries under vote', () => {
			const state = Map({
				entries :  List.of('Trainspotting', '28 Days Later', 'Sunshine')
			});
			const nextState = next(state);
			expect(nextState).to.equal(Map({
				vote: Map({
					round : 1,
					pair: List.of('Trainspotting', '28 Days Later')
				}),
				entries: List.of('Sunshine')
			}))
		})
		
		it('puts winner of the current vote back to entries', () => {
			const state = Map({
				vote: Map({
					pair: List.of('Trainspotting', 'Simpsons'),
					tally: Map({
						'Trainspotting' : 4,
						'Simpsons' : 2
					})
				}),
				entries: List.of('Sunshine', 'Millions', 'Hours')
			})
			const nextState = next(state);
			expect(nextState).to.equal(Map({
				vote:Map({
					round: 1,
					pair: List.of('Sunshine', 'Millions')
				}),
				entries: List.of('Hours', 'Trainspotting')
			}))
		})
		
		it('puts both from tied vote back to entries', () => {
			const state = Map({
				vote: Map({
					pair: List.of('Trainspotting', 'Simpsons'),
					tally: Map({
						'Trainspotting' : 3,
						'Simpsons' : 3
					})
				}),
				entries : List.of('Sunshine')
			})
			const nextState = next(state);
			expect(nextState).to.equal(Map({
				vote: Map({
					round: 1,
					pair: List.of('Sunshine', 'Trainspotting')
				}),
				entries: List.of('Simpsons')
			}))
		})
		
		it('marks winner when just one entry remains', () => {
			const state = Map({
				vote: Map({
					pair: List.of('Trainspotting', 'Simpsons'),
					tally: Map({
						'Trainspotting' : 3,
						'Simpsons' : 2
					})
				}),
				entries : List.of()
			})
			const nextState = next(state);
			expect(nextState).to.equal(Map({
				winner: 'Trainspotting'
			}))
		})
	
	})
	

	describe ('vote', () => {

		it('creates a tally for the voted entry', () => {
			expect(
				vote(Map({
				round: 1,
				pair: List.of('Trainspotting', '28 Days Later')
				}), 'Trainspotting', 'voter1')
			).to.equal(
				Map({
				round: 1,
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 1
				}),
				votes: Map({
					voter1: 'Trainspotting'
				})
				})
			);
		});
		
		it('adds to existing tally for the voted entry', () => {
			const state = Map({
				round: 1,
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 3,
					'28 Days Later': 2
				}),
				votes: Map()
			});
			const nextState = vote(state, 'Trainspotting', "voter1");
			expect(nextState).to.equal(Map({
				round: 1,
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 4,
					'28 Days Later': 2
				}),
				votes: Map({
					voter1 : 'Trainspotting'
				})
			}));
		});
	})
})