import * as React from 'react';
import TodoItemView from './todoItemView';

export enum ItemStatus {
    Creation,
    Active,
    Completed,
    Deleted
}

export interface TodoItemProps {
    id: number,
    delete: Function
}

interface TodoItemState {
    content: string,
    state: ItemStatus
}

export default function TodoItem (props: TodoItemProps): React.ReactElement {

    const [content, updateContent] = React.useState("");
    const [state, setState] = React.useState(ItemStatus.Creation);
    const [addDisabled, updateAddDisable] = React.useState(true);
    const [editDisabled, updateEditDisable] = React.useState(true);
    const [addButtonHidden, setHideAddButton] = React.useState(false);
    const [editButtonHidden, setHideEditButton] = React.useState(true);
    const [deleteDisabled, updateDeleteDisable] = React.useState(false);
    const [completedDisabled, updateCompleteDisable] = React.useState(true);
    const [completeButtonHidden, setHideCompleteButton] = React.useState(false);

    function handleChange(updatedContent: string) {
        if(state===ItemStatus.Completed){
            return;
        }
        updateContent(updatedContent);
        updateAddDisable(false);
    }

    function handleAddButtonClick() {
        if(state===ItemStatus.Creation || state===ItemStatus.Active) {
            setState(ItemStatus.Active);
            updateAddDisable(true);
            setHideAddButton(true);
            // setHideEditButton(false);
            updateDeleteDisable(false);
            updateCompleteDisable(false);
        }
    }

    function handleDeleteButtonClick() {
            setState(ItemStatus.Deleted);
            updateCompleteDisable(true);
            props.delete(props.id);
    }

    function handleCompleteButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if(state===ItemStatus.Active) {
            setState(ItemStatus.Completed);
            console.log(content);
            updateEditDisable(false);
            setHideEditButton(false);
            // updateCompleteDisable(true);
            setHideCompleteButton(true);
            // event.target.parentElement.firstChild.classList.add("strikethrough");
        }
    }

    function handleEditButtonClick() {
        if(state=== ItemStatus.Completed) {
            setState(ItemStatus.Active);
            updateCompleteDisable(false);
            updateDeleteDisable(false);
            // updateEditDisable(true);
            setHideAddButton(false);
            setHideEditButton(true);
            setHideCompleteButton(false);
        }
    }

    return(
        <TodoItemView 
            key={props.id}
            content = {content}
            onChange = {handleChange}
            addButtonDisabled = {addDisabled}
            addButtonClick = {handleAddButtonClick}
            deleteButtonDisabled = {deleteDisabled}
            deleteButtonClick = {handleDeleteButtonClick}
            completeButtonDisabled = {completedDisabled}
            completeButtonClick = {handleCompleteButtonClick}
            addButtonHidden = {addButtonHidden}
            editButtonHidden = {editButtonHidden}
            editButtonDisabled= {editDisabled}
            editButtonClick = {handleEditButtonClick}
            completeButtonHidden = {completeButtonHidden}
        />
    )
}