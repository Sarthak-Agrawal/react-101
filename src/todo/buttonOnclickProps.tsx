import * as React from 'react';

interface ButtonProps {
    label: string,
    isDisabled: boolean,
    clickAction: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.clickAction} disabled={props.isDisabled}>
            {props.label}
        </button>
    )
}