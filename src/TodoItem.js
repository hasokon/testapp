import React, { Component } from 'react';

class TodoItem extends Component {
    
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const id = this.props.id;
        this.props.removeTodo(id);
    }

    render() {
        return (
            <li>
                {this.props.title}
                <button onClick={this.handleClick}>
                    Delete
                </button>
            </li>
        );
    };
}

export default TodoItem;