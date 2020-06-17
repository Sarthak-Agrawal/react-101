import * as React from 'react';
import TodoItem from './todoItem';
import '../css/todo.css';

type TodoItemState = {
  todoItem: {
    id: number
  }
}

function TodoList(props:{}) {
  const[todoList, updateList] = React.useState(Array<TodoItemState>());

//   function handleDelete(id:number) {
//     updateList(
//         todoList.filter( item => {
//             return item.id!==id;
//         }
//     ))
//   }


  return (
    <div className="todo">
      <h1 className="todo-heading">Todos</h1>
      <div className="todo-list">
        {todoList.map(item => {
          return <TodoItem id={item.todoItem.id} key={item.todoItem.id}/>;
        })}
        <button onClick= {() => updateList(
          [...todoList, {todoItem: {id:todoList.length}}]
        )}>
          Add Item
        </button>
      </div>
    </div>
  )
}

export default TodoList;