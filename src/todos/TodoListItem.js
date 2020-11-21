import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed }) => (
    <div className="todo-item-container">
        <ul className="list-group">
          <li className="list-group-item mb-3">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                <button className="completed-button btn btn-warning mr-3">Mark As Completed</button>
                <button
                    onClick={() => onRemovePressed(todo.text)}
                    className="remove-button btn btn-danger"
                >Remove</button>
            </div>
          </li>
        </ul>
    </div>
);

export default TodoListItem;
