import React from 'react';

function AddSubmittedName(props: {value:string}) {
    return (
        <p>{props.value}</p>
    )
}

class NameForm extends React.Component<{}, {value: string}> {
    constructor(props: {}) {
        super(props);

        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            value: event.currentTarget.value
        });
    }

    handleSubmit(event: React.FormEvent) {
        console.log(this.state.value);
        event.preventDefault();
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <br/><br/>
                <AddSubmittedName value={this.state.value} />
            </form>
        );
    }
}

export default NameForm;