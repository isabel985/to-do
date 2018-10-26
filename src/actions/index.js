import uuidv4 from 'uuid/v4';
import { DELETE_TODO, ADD_TODO } from './types'

export const deleteListItem = id => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});

export const addListItem = ({ message }) => ({
    type: ADD_TODO,
    payload: {
        id: uuidv4(),
        message,
        completed: false
    }
})