import * as React from 'react';
import {default as BootstrapButton} from 'react-bootstrap/Button';

interface ButtonProps {
    label: string,
    isDisabled: boolean,
    clickAction: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function CustomButton(props: ButtonProps) {
    return (
        <>
            <BootstrapButton variant="primary" onClick={props.clickAction} disabled={props.isDisabled}>
                {props.label}
            </BootstrapButton>
        </>
    )
}