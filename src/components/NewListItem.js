import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addListItem } from '../actions';

const NewListItem = props => {
    const dispatch = useDispatch();
    
    const [description, setDescription] = useState('');

    const handleInputChange = e => {
        setDescription(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (description) {
            dispatch(addListItem(description.trim()));
            handleReset();
        }
    };

    const handleReset = () => {
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="description" 
            placeholder="description" 
            onChange={handleInputChange} 
            value={description} 
		/> 
        <hr />
        <button type="submit">Add</button>  
        <button 
            type="button" 
            onClick={handleReset}>Cancel</button>
        </form>
    );
}

export default NewListItem;