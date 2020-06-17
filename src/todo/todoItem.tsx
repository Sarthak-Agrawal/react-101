import * as React from 'react';
import CustomButton from './buttonOnclickProps';
import { InputGroup, Form } from 'react-bootstrap';


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

export default function TodoItem (props: TodoItemProps): React.ReactElement {

    const [content, updateContent] = React.useState("");
    const [state, setState] = React.useState(ItemStatus.Creation);
    const [addDisabled, updateAddDisable] = React.useState(true);
    const [editDisabled, updateEditDisable] = React.useState(true);
    const [addButtonHidden, setHideAddButton] = React.useState(false);
    const [editButtonHidden, setHideEditButton] = React.useState(true);
    const [deleteDisabled, updateDeleteDisable] = React.useState(false);
    const [isItemHidden, hideTheItem] = React.useState(false);
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
            hideTheItem(true);
        
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
            itemHidden = {isItemHidden}
            addButtonHidden = {addButtonHidden}
            editButtonHidden = {editButtonHidden}
            editButtonDisabled= {editDisabled}
            editButtonClick = {handleEditButtonClick}
            completeButtonHidden = {completeButtonHidden}
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
    completeButtonClick: Function,
    itemHidden: boolean,
    addButtonHidden: boolean,
    editButtonHidden: boolean,
    editButtonDisabled: boolean,
    editButtonClick: Function,
    completeButtonHidden: boolean
}

function TodoItemView(props: TodoItemViewProps) {

    return (
        <li className="item" hidden={props.itemHidden}>
            <div className="item-view">
                <InputGroup>
                    <Form.Control
                        id="itemText" 
                        type="text" 
                        className="mr-3"
                        value={props.content} 
                        onChange={e => props.onChange(e.target.value)}
                        placeholder="Todo Item"
                    />
                    {/* <input id="itemText" type="text" value={props.content} onChange={e => props.onChange(e.target.value)} /> */}
                    {/* <input type="checkbox" id={props.content} value={props.content} onClick={() => props.addButtonClick()}/>
                    <label htmlFor={props.content} onChange={e => props.onChange(e.target.value)} /> */}
                    <InputGroup.Append> 
                        <CustomButton label="Add" isHidden={props.addButtonHidden} isDisabled={props.addButtonDisabled} clickAction={() => props.addButtonClick()} buttonVariant="primary" />
                        <CustomButton label="Edit" isHidden={props.editButtonHidden} clickAction={() => props.editButtonClick()} buttonVariant="primary" />
                        <CustomButton label="Complete" isHidden={props.completeButtonHidden} isDisabled={props.completeButtonDisabled} clickAction={(e) => props.completeButtonClick(e)} buttonVariant="dark" />
                        <CustomButton label="Delete" isDisabled={props.deleteButtonDisabled} clickAction={() => props.deleteButtonClick()} buttonVariant="danger" />
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </li>
    );
}