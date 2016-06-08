import {getMessages, setEntries, next, restart, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_MESSAGES':
    return getMessages(state, action.messages);
  case 'SET_ENTRIES':
    return setEntries(state, action.entries);
  case 'NEXT':
    return next(state);
  case 'RESTART':
    return restart(state);
  case 'VOTE':
    return state.update('vote',
        voteState => vote(voteState, action.entry, action.clientId));
  }
  return state;
}