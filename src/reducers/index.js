import { DELETE_LIST_ITEM, ADD_LIST_ITEM, TOGGLE_COMPLETE, EDIT_LIST_ITEM } from '../actions/types';
import initialState from '../data/listItems';

export default function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIST_ITEM:
            return [...state, action.payload];
        case DELETE_LIST_ITEM:
            return state.filter(item => item.id !== action.payload.id);
        case EDIT_LIST_ITEM: 
            const newEditState = [...state];
            const editedItem = newEditState.find(e => e.id === action.payload.id);

            const editIndex = newEditState.indexOf(editedItem);
            console.log(editIndex);
            newEditState[editIndex].isEditing = !newEditState[editIndex].isEditing;
            return newEditState;
        case TOGGLE_COMPLETE:
            const newToggleState = [...state];
            const toggledItem = newToggleState.find(e => e.id === action.payload.id);

            const index = newToggleState.indexOf(toggledItem);
            newToggleState[index].completed = !newToggleState[index].completed;
            return newToggleState;
        default:
            return state;
    }
}