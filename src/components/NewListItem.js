import React, { Component } from 'react';

class NewListItem extends Component {
    state = {
        message: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.message.trim()) {
            this.props.onAddListItem(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            message: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="message" placeholder="message" onChange={this.handleInputChange} value={this.state.message} /> 
                <hr />
                <button type="submit">Add</button> 
                <button type="button" onClick={this.handleReset}>Cancel</button>
            </form>
        )
    }
}

export default NewListItem;