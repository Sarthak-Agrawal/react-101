import * as React from 'react';
import TodoItem from './todoItem';
import '../css/todo.css';
import { Jumbotron, Button as BootstrapButton } from 'react-bootstrap';

type TodoItemState = {
  todoItem: {
    id: number
  }
}

function TodoList(props:{}) {
  const[todoList, updateList] = React.useState(Array<TodoItemState>());

  return (
    <Jumbotron fluid={true}>
    <div className="todo mt-5 mb-5">
      <h1 className="todo-heading">Todos</h1>
      <div className="todo-list">
        {todoList.map(item => {
          return <TodoItem id={item.todoItem.id} key={item.todoItem.id}/>;
        })}
        <BootstrapButton className="mt-3" variant="primary" size="lg" onClick= {() => updateList(
          [...todoList, {todoItem: {id:todoList.length}}]
        )}>
          Add Item
        </BootstrapButton>
      </div>
    </div>
    </Jumbotron>
  )
}

export default TodoList;