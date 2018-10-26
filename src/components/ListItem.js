import React from 'react';

export default ({ listItem: { id, message, completed }, onDelete, onToggleToDo }) => {
    return (
        <li>
            <input 
                onChange={() => onToggleToDo(id)}
                type="checkbox"
                 />
            <span>
                {message}
            </span>
            <button 
                type="button" 
                onClick={() => onDelete(id)}>
                delete
            </button>
        </li>
    );
};