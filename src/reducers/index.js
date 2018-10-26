import { DELETE_TODO } from '../actions/types';
import initialState from '../data/listItems';

export default function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_TODO:
            return state.filter(listItem => listItem.id !== action.payload.id);
        default:
            return state;
    }
}