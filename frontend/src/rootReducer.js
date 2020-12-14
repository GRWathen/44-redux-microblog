import { combineReducers } from "redux";

import postsReducer from "./postsReducer.js";
import titlesReducer from "./titlesReducer.js";

const rootReducer = combineReducers({posts: postsReducer, titles: titlesReducer})

export default rootReducer;
