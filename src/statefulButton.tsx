import React from 'react';

interface ButtonProps {
    afterTheClick: () => void
}

function LoginButton(props: ButtonProps) {
    return (
        <button onClick={props.afterTheClick}>
            Login
        </button>
    )
}

function LogoutButton(props:ButtonProps) {
    return (
        <button onClick={props.afterTheClick}>
            Logout
        </button>
    )
}

class Button extends React.Component<{}, {isLoggedIn: boolean}> {
    constructor(props: {}) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn) {
            button = <LogoutButton afterTheClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton afterTheClick={this.handleLoginClick} />
        }

        return (
            <div>
                {button}
            </div>
        );
    }
}

export default Button