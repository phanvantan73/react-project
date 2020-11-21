import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './action';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form form-inline text-center">
          <div className="form-group mb-2">
            <input
                type="text"
                className="new-todo-input form-control mr-5"
                placeholder="Type your new todo"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
          </div>
          <button
                className="new-todo-button btn btn-success mb-2"
                onClick={() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue);

                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
          >Create Todo</button>
        </div>
    )
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
