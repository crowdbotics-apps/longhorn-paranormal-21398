import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn11138819Reducer from '../features/SignIn11138819/redux/reducers'
import Dashboard12138818Reducer from '../features/Dashboard12138818/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn11138819: SignIn11138819Reducer,
Dashboard12138818: Dashboard12138818Reducer,

});