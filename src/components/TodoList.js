import React from 'react';

const TodoList = props => props.data.map(value =>
    <li onClick = {() => props.remove(value.id)} id = {value.id} > {value.text} </li>
);

export default TodoList;