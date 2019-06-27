import React from 'react';
import ListItem from '../components/ListItem';
import { deleteListItem, toggleComplete, editListItem } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function ToDoList({ listItems, onDelete, onToggle, onEdit }) {
		return (
				<div className="wrapper">
						<h3>to do list:</h3>
						<ul>
								{listItems.map(item => {
										if (item.completed === false) {
												return <ListItem 
														item={item} 
														key={item.id}
														onDelete={onDelete}
														onToggle={onToggle} 
														onEdit={onEdit}
														/>;
										};
								})}
						</ul>
						<h3>completed:</h3>
						<ul>
								{listItems.map(item => {
										if (item.completed) {
												return <ListItem 
														item={item} 
														key={item.id}
														onDelete={onDelete}
														onToggle={onToggle} 
														onEdit={onEdit}
														checked="checked"
														/>;
										};
								})}
						</ul>
				</div>
		)
}

const ToDoListContainer = () => {
		const listItems = useSelector(state => state);
		const dispatch = useDispatch();
		const onDelete = (id) => dispatch(deleteListItem(id));
		const onToggle = (id) => dispatch(toggleComplete(id));
		const onEdit = (id) => dispatch(editListItem(id));
		return <ToDoList listItems={listItems} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
};

export default ToDoListContainer;