import * as React from 'react';
import Button from './buttonOnclickProps';

export enum ItemStatus {
    Creation,
    Active,
    Completed,
    Deleted
}

export interface TodoItemProps {
    id: number
}

interface TodoItemState {
    content: string,
    state: ItemStatus
}

export function TodoItem (props: TodoItemProps): React.ReactElement {

    const [content, updateContent] = React.useState("");
    const [state, setState] = React.useState(ItemStatus.Creation);
    const [addDisabled, updateAddDisable] = React.useState(true);
    const [deleteDisabled, updateDeleteDisable] = React.useState(true);
    const [completedDisabled, updateCompleteDisable] = React.useState(true);

    function handleChange(updatedContent: string) {
        if(state!==ItemStatus.Creation){
            return;
        }
        updateContent(updatedContent);
        updateAddDisable(false);
    }

    function handleAddButtonClick() {
        if(state===ItemStatus.Creation) {
            setState(ItemStatus.Active);
            updateAddDisable(true);
            updateDeleteDisable(false);
            updateCompleteDisable(false);
        }
    }

    function handleDeleteButtonClick() {
        if(state===ItemStatus.Active) {
            setState(ItemStatus.Completed);
            updateCompleteDisable(true);
        }
    }

    function handleCompleteButtonClick() {
        if(state===ItemStatus.Active) {
            setState(ItemStatus.Deleted);
            updateDeleteDisable(true);
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
        />
    )
}

interface TodoItemViewProps {
    content: string,
    onChange: Function,
    addButtonDisabled: boolean,
    addButtonClick: Function,
    deleteButtonDisabled: boolean,
    deleteButtonClick: Function,
    completeButtonDisabled: boolean,
    completeButtonClick: Function
}

function TodoItemView(props: TodoItemViewProps) {

    return (
        <li className="item">
            <input type="text" value={props.content} onChange={e => props.onChange(e.target.value)} />
            <Button label="Add" isDisabled = {props.addButtonDisabled} clickAction={() => props.addButtonClick()} />
            <Button label="Delete" isDisabled={props.deleteButtonDisabled} clickAction={() => props.deleteButtonClick()} />
            <Button label="Complete" isDisabled={props.completeButtonDisabled} clickAction={() => props.completeButtonClick()} />
        </li>
    );
}