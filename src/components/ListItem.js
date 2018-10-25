import React from 'react';

export default ({ listItem: { id, message, completed }, onDelete }) => {
    return (
        <li>{message} <button type="button" onClick={() => onDelete(id)}>delete</button></li>
    );
};