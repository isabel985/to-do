import { DELETE_LIST_ITEM, ADD_LIST_ITEM, TOGGLE_COMPLETE, SAVE_LIST_ITEM } from '../actions/types';
import initialState from '../data/listItems';

export default function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIST_ITEM:
            return [...state, action.payload];

        case DELETE_LIST_ITEM:
            return state.filter(item => item.id !== action.payload.id);

        case SAVE_LIST_ITEM: 
            const newSavedState = [...state];
            return newSavedState.map((item) => {
                // editing one item
                if (item.id === action.payload.id) {
                    return Object.assign({}, item, {description: action.payload.description})
                }
                // return all the one's not being changed
                return item
            });

        case TOGGLE_COMPLETE:
            const newToggleState = [...state];
            const toggledItem = newToggleState.find(e => e.id === action.payload.id);
            const index = newToggleState.indexOf(toggledItem);
            newToggleState[index].complete = !newToggleState[index].complete;
            return newToggleState;
        
        default:
            return state;
    }
}