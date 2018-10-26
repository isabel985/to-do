import { DELETE_TODO, ADD_TODO, TOGGLE_TODO } from '../actions/types';
import initialState from '../data/listItems';

export default function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter(listItem => listItem.id !== action.payload.id);
        case TOGGLE_TODO: 
            const newState = [...state];
            const foundItem = newState.find(item =>
                item.id === action.payload.id
            );
            const index = newState.indexOf(foundItem);
            newState[index].completed = !newState[index].completed;
            return newState;
        default:
            return state;
    }
}