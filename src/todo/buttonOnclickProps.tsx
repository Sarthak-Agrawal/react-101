import * as React from 'react';
import {ButtonProps, default as BootstrapButton} from 'react-bootstrap/Button';

interface CustomButtonProps {
    label?: any,
    isDisabled?: boolean,
    clickAction: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    buttonVariant: ButtonProps["variant"],
    isHidden?: boolean
}

export default function CustomButton(props: CustomButtonProps) {
    return (
        <>
            <BootstrapButton 
                className="ml-1" 
                variant={props.buttonVariant} 
                onClick={props.clickAction} 
                disabled={props.isDisabled || false} 
                hidden={props.isHidden || false}
            >
                {props.label}
            </BootstrapButton>
        </>
    )
}