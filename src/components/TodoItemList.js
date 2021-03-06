import React, { Component } from 'react';
import TodoItem from './TodoItem'
class TodoItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
      return this.props.todos !== nextProps.todos;
  }
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
        ({id, text, color, checked}) => (
          <TodoItem
            id={id}
            text={text}
            color={color}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
          />
        )
      );
    return (
        <div>
          {todoList}    
        </div>
      );
  }
}

export default TodoItemList;