import {setEntries, vote, next, INITIAL_STATE} from './core';

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'SET_ENTRIES' :
            return setEntries(state, action.entries);
        case 'NEXT' :
            return next(state);
        case 'VOTE' : 
            return state.update('vote',
                voteState => vote(voteState, action.entry)
            )
    }
    return state;
}