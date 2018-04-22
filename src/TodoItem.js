import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li>
                {this.props.title}
                <button>
                    Delete
                </button>
            </li>
        );
    };
}

export default TodoItem;