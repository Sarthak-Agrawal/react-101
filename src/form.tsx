import React from 'react';

// class AddSubmittedName extends React.Component<> {
//     constructor(props) {
//         super(props);

//     }
// }

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
        // <AddSubmitName names={} />
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
            </form>
        );
    }
}

export default NameForm;