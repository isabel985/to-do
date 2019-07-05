import React from 'react';
import ListItem from '../components/ListItem';
import { toggleComplete } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function ToDoList({ listItems, onToggle }) {
	return (
		<div className="wrapper">
				<h3>to do list:</h3>
				<ul>
						{listItems.map(item => {
								if (!item.completed) {
										return <ListItem 
												item={item} 
												key={item.id}
												onToggle={onToggle} 
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
													onToggle={onToggle} 
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
	// need to be in ListItem.js
	const onToggle = (id) => dispatch(toggleComplete(id));
	// 
	return <ToDoList listItems={listItems} onToggle={onToggle} />
};

export default ToDoListContainer;