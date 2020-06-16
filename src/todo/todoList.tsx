// import * as React from 'react';
// import TodoItem, {TodoItemProps} from './todoItem';

// interface TodoListState {
//     items: React.ReactElement<TodoItemProps>[];
// }

// function TodoList(props:{}) {
//     const[todoList, updateList] = React.useState<TodoListState> (Array<TodoListState>());

//     function addItem() {
//         todoList.push(<TodoItem key={todoList.length} id={todoList.length} />);
//         return todoList;
//     }

//     return (
//         <div className="todo-list">
//                 {todoList}
//                 <button onClick= {updateList(addItem)}>
//                     Add Item
//                 </button>
//         </div>
//     )
// }

import * as React from 'react';
// const TodoItem = require('./todoItem').TodoItem;
import { TodoItem, TodoItemProps } from './todoItem';


function TodoList(props:{}) {
 // const initialList: Array<typeof TodoItem> = [];
 // const[todoList, updateList] = React.useState(initialList);
  const[todoList, updateList] = React.useState(Array<typeof TodoItem>());

    function addNewItem() {
        const newItem =(newItemProps: TodoItemProps) => TodoItem({id: todoList.length})
        todoList.push(newItem);
        updateList(todoList);
    }

  return (
      <div className="todo-list">
        {todoList}
        <button onClick={() => addNewItem()}>
          Add Item
        </button>
      </div>
  )
}

export default TodoList;