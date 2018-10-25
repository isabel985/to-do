import uuidv4 from 'uuid/v4';
import { DELETE_TODO } from './types'

export const deleteListItem = id => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});