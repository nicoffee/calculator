import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                onClick={() => this.props.handleClick(this.props.value)}>
                {this.props.value}
            </button>
        );
    }
}

export default Button