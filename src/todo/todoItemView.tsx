import * as React from 'react';
import CustomButton from './buttonOnclickProps';
import { InputGroup, Form } from 'react-bootstrap';
import { Icon } from 'react-icons-kit'
import { cross } from 'react-icons-kit/icomoon/cross';


interface TodoItemViewProps {
    content: string,
    onChange: Function,
    addButtonDisabled: boolean,
    addButtonClick: Function,
    deleteButtonDisabled: boolean,
    deleteButtonClick: Function,
    completeButtonDisabled: boolean,
    completeButtonClick: Function,
    addButtonHidden: boolean,
    editButtonHidden: boolean,
    editButtonDisabled: boolean,
    editButtonClick: Function,
    completeButtonHidden: boolean
}

export default function TodoItemView(props: TodoItemViewProps) {

    return (
        <li className="item">
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
                        <CustomButton label={<Icon icon={cross} />} isDisabled={props.deleteButtonDisabled} clickAction={() => props.deleteButtonClick()} buttonVariant="light" />
                        
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </li>
    );
}