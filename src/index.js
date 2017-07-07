import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
              onClick={!this.props.pending ?
                () => this.props.handleClick(this.props.value) :
                () => this.props.handleClickOperation(this.props.value, this.props.operation)}>
                {this.props.value}
            </button>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOperation = this.handleClickOperation.bind(this);

        this.state = {
            number: '',
            pendingOperation: false,
            operation: ''
        };
    }

    handleClick(num) {
        this.setState({
            number: num
        });
    }

    handleClickOperation(num1, operator) {
        let result;
        const num2 = this.state.number;

        switch (operator) {
            case '+':
                result = num2 + num1;
                break;
            case '-':
                result = num2 - num1;
                break;
            case '*':
                result = num2 * num1;
                break;
            case '/':
                result = num2 / num1;
                break;
        }

        this.setState({
            number: result,
            pendingOperation: false
        });
    }

    prepareOperation(operator) {
        this.setState({
            pendingOperation: true,
            operation: operator
        });
    }

    render() {
        let buttons = [];
        for (let i = 1; i <= 9; i++) {
            buttons.push(
              <Button
                value={i}
                pending = {this.state.pendingOperation}
                operation = {this.state.operation}
                handleClick = {this.handleClick}
                handleClickOperation = {this.handleClickOperation}
              />
            )
        }

        return (
          <div className="calculator">
              <div className="calculator__screen">{ this.state.number }</div>
              <div className="calculator__buttons">
                  <div className="buttons">
                      <div className="buttons__numbers">
                          {buttons}
                      </div>
                      <div className="buttons__operations">
                          <button onClick={() => this.prepareOperation('+')}>+</button>
                          <button onClick={() => this.prepareOperation('-')}>-</button>
                          <button onClick={() => this.prepareOperation('*')}>*</button>
                          <button onClick={() => this.prepareOperation('/')}>/</button>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);