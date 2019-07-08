import React from 'react';
import ListItem from '../components/ListItem';
import { toggleComplete } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function ToDoList({ listItems, onToggle }) {
	return (
		<React.Fragment>
			<h3>to do list:</h3>
				<ul>
					{listItems.map((item) => {
						if (!item.complete) {
							return <ListItem id={item.id} key={item.id} onToggle={onToggle} />
						}
					})}
				</ul>
			<h3>completed:</h3>
				<ul>
					{listItems.map((item) => {
						if (item.complete) {
							return <ListItem id={item.id} key={item.id} onToggle={onToggle} checked="checked" />
						}
					})}
				</ul>
		</React.Fragment>
	);
}

const ToDoListContainer = () => {
	const listItems = useSelector(state => state);
	const dispatch = useDispatch();
	const onToggle = (id) => dispatch(toggleComplete(id));
	return <ToDoList listItems={listItems} onToggle={onToggle} />
};

export default ToDoListContainer;