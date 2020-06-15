import * as React from 'react';

export enum ItemStatus {
    Creation,
    Active,
    Completed,
    Deleted
}

interface TodoItemProps {
    id: number
}

interface TodoItemState {
    content: string,
    state: ItemStatus
}

function TodoItem (props: TodoItemProps) {

    const [content, setValue] = React.useState("");
    const [state, setState] = React.useState(ItemStatus.Creation);
    const [addDisabled, updatAddDisable] = React.useState(true);
    const [deleteDisabled, updatDeleteDisable] = React.useState(true);
    const [completedDisabled, updatCompleteDisable] = React.useState(true);

    return (
        <div className="item">
            <input type="text" value={content} onChange={event => {
                if(state!==ItemStatus.Creation) {
                    return;
                }
                setValue(event.target.value)
                updatAddDisable(false);
            }} />
            <button onClick={event => {
                if(state===ItemStatus.Creation) {
                    setState(ItemStatus.Active);
                    updatAddDisable(true);
                    updatDeleteDisable(false);
                    updatCompleteDisable(false);
                }
            }} disabled={addDisabled}> Add </button>

            <button onClick={event => {
                if(state===ItemStatus.Active) {
                    setState(ItemStatus.Completed);
                    updatCompleteDisable(true);
                }
            }} disabled={addDisabled}> Complete </button>

            <button onClick={event => {
                if(state===ItemStatus.Active) {
                    setState(ItemStatus.Deleted);
                    updatDeleteDisable(true);
                }
            }} disabled={addDisabled}> Delete </button>
        </div>
    )
}