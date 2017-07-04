import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
// import Button from 'components/button'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        console.log(this.props.children);
    }

    render() {
        return <button onClick={ this.handleClick.bind(this) } >{this.props.children}</button>;
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 10};
    }

    componentDidMount() {
        console.log(this.fieldEditor1);
    }

    render() {
        return (
        <div className="calculator">
            <div className="screen">{this.state.number}</div>
            <div className="numberButtons">
                <div>
                    <Button ref={(fieldEditor1) => {this.fieldEditor1 = fieldEditor1;}}>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                </div>
                <div>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                </div>
                <div>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                </div>
            </div>
        </div>);
    }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);