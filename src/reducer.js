import {setEntries, next, vote, INITIAL_STATE} from './core';
//一个应用有大量的action，如何解决
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    return setEntries(state, action.entries);
  case 'NEXT':
    return next(state);
  case 'VOTE':
    return state.update('vote',
                        voteState => vote(voteState, action.entry));//提供给业务逻辑它仅需要的数据的解决方案
  }
  return state;
}