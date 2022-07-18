import { combineReducers } from  'redux';
import { ReducerPosts } from './ReducerPost.js';
const reducers = combineReducers({
    allPosts : ReducerPosts
})
export default reducers;     