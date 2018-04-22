import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [],
        uniqueId: 0,
      };

      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
      this.resetTodo = this.resetTodo.bind(this);
    }

    addTodo(title) {
      const {
        tasks,
        uniqueId,
      } = this.state;

      tasks.push({
        title,
        id: uniqueId,
      });

      this.setState({
        tasks: tasks,
        uniqueId: uniqueId + 1,
      });
    }

    removeTodo(id) {
      const {
        tasks,
        uniqueId,
      } = this.state;

      const newTasks = tasks.filter((n) => n.id != id)

      this.setState({
        tasks: newTasks,
        uniqueId: uniqueId,
      });
    };

    resetTodo() {
      this.setState({
        tasks: [],
      });
    }

    render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>
          リセット
        </button>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks} removeTodo={this.removeTodo}/>
      </div>  
    );
  }
}

export default App;
