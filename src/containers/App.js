import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import styles from '../components/TodoList.css'; 
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 1,
            text: 'clean room'
        }, {
        id: 2,
            text: 'wash the dishes'
        }, {
        id: 3,
            text: 'feed my cat'
        }, {
          id: 4,
            text: 'feed my dog'
        }, {
          id: 5,
            text: 'test' //uzyty do testu, strona nie odwieza sie automatycznie po wprowadzeniu zmiany i zapisie. Po jej odswiezeniu wszystko jest ok. Nie wiem, czy to tak mialo dzialac.
        }]
    };
  } 
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }
  render() {
    return (
      <div className={style.TodoApp}>
      <Title count={this.state.data.length} title={this.props.title}/>
        <div className={styles.TodoList}>
          <TodoList data={this.state.data} remove={this.removeTodo.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);