import { combineReducers } from "redux";
import posts from "./postsReducer";
import modal from './modalReducer';

export default combineReducers({
    posts, modal
})