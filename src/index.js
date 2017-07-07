import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button onClick={this.props.handler}>{this.props.number}</button>;
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
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
        const num2 = this.state.number;

        this.setState({
            pendingOperation: false
        });

        switch (operator) {
            case '+':
                this.setState({
                    number: num1 + num2,
                });
                break;
            case '-':
                this.setState({
                    number: num2 - num1,
                });
                break;
            case '*':
                this.setState({
                    number: num1 * num2,
                });
                break;
            case '/':
                this.setState({
                    number: num2 / num1,
                });
                break;
        }
    }

    prepareOperation(operator) {
        this.setState({
            pendingOperation: true,
            operation: operator
        });
    }

    render() {
        return (
          <div className="calculator">
              <div className="screen">{ this.state.number }</div>
              <div className="numberButtons">
                  <div>
                      <button
                        value={1}
                        onClick={
                            () => {
                                !this.state.pendingOperation ? this.handleClick(1) : this.handleClickOperation(1, this.state.operation)
                            }
                        }>1
                      </button>
                      <button
                        value={2}
                        onClick={
                            () => {
                                !this.state.pendingOperation ? this.handleClick(2) : this.handleClickOperation(2, this.state.operation)
                            }
                        }>2
                      </button>
                      <button
                        value={3}
                        onClick={
                            () => {
                                !this.state.pendingOperation ? this.handleClick(3) : this.handleClickOperation(3, this.state.operation)
                            }
                        }>3
                      </button>
                      <button onClick={() => this.prepareOperation('+')}>+</button>
                      <button onClick={() => this.prepareOperation('-')}>-</button>
                      <button onClick={() => this.prepareOperation('*')}>*</button>
                      <button onClick={() => this.prepareOperation('/')}>/</button>
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