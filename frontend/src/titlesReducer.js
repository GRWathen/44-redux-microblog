import { ADD_TITLE, UPDATE_TITLE, DELETE_TITLE } from "./actionTypes.js";

const INITIAL_STATE = [];

function titlesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TITLE: {
            const obj = action.payload.obj;
            const newState = [ ...state, obj ];
            return newState;
        }
        case UPDATE_TITLE: {
            const newState = state.map(title => title.id === action.payload.id
                ? action.payload.title
                : title);
            return newState;
        }
        case DELETE_TITLE: {
            const newState = state.filter(title => title.id !== action.payload.id);
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default titlesReducer;
