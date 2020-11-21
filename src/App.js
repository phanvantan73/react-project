import React from 'react';
import { hot } from "react-hot-loader";
import TodoList from './todos/TodoList';
import './App.css';

const App = () => (
    <React.Fragment>
    <div className="jumbotron" style={{ height: '100vh' }}>
        <TodoList />
    </div>
    </React.Fragment>
);

export default hot(module)(App);
