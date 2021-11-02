 import { createStore ,combineReducers } from "redux";

 import user from './user/user';
 import counter from './counter/counter';
 import todos from './todos/todos';

 const reducer =combineReducers({counter, todos,user})

 const store =createStore(reducer)

 export default store;