import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Button from './components/Button'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.reset = this.reset.bind(this);
        this.calculate = this.calculate.bind(this);
        this.addDecimal = this.addDecimal.bind(this);

        this.state = {
            number: 0,
            operation: '',
            screen: '0',
            pendingOperation: false,
            pendingInput: false,
            firstNull: true,
            isDecimal: false
        };
    }

    handleClick(num) {
        const strNum = num.toString();

        this.setState((prevState, props) => {
            if (prevState.number === 0 && this.state.screen === '0') {
                return {
                    number: num,
                    screen: strNum,
                    operation: ''
                }
            }

            if (prevState.number) {
                if (this.state.isDecimal) {
                    return {
                        number: prevState.number + num / 10,
                        screen: this.state.screen += strNum,
                        operation: ''
                    }
                }

                console.log('fa14w12e');
                return {
                    number: prevState.number * 10 + num,
                    screen: this.state.screen += strNum,
                    operation: ''
                }
            } else {
                return {
                    number: num,
                    screen: this.state.screen += strNum,
                    operation: ''
                }
            }
        });
    }

    prepareOperation(operator) {
        this.setState((prevState, props) => {
            if (this.state.firstNull && !prevState.screen) {
                this.setState((prevState, props) => {
                    return {
                        number: num,
                        screen: strNum,
                        firstNull: false,
                    }
                })
            }

            if (prevState.operation === operator) {
                return {
                    pendingOperation: true,
                    operation: operator,
                    number: 0,
                    firstNull: true,
                    isDecimal: false
                }
            } else {
                let string = this.state.screen;

                if (this.state.operation) {
                    string = this.state.screen.slice(0, -1);
                }

                return {
                    pendingOperation: true,
                    operation: operator,
                    screen: string + operator,
                    number: 0,
                    firstNull: true,
                    isDecimal: false
                }
            }
        });
    }

    addDecimal() {
        if (!this.state.isDecimal) {
            this.setState({
                screen: this.state.screen += '.',
                isDecimal: true
            })
        }
    }

    reset() {
        this.setState({
            number: 0,
            operation: '',
            screen: '0',
            pendingOperation: false,
            pendingInput: false,
            firstNull: true,
            isDecimal: false
        })
    }

    calculate() {
        this.setState({
            screen: eval(this.state.screen)
        });
    }

    render() {
        let buttons = [];
        for (let i = 1; i <= 9; i++) {
            buttons.push(
              <Button
                key={i}
                value={i}
                operation={this.state.operation}
                handleClick={this.handleClick}
              />
            )
        }

        return (
          <div className="calculator">
              <div className="calculator__screen">{ this.state.screen }</div>
              <div className="calculator__buttons">
                  <div className="buttons">
                      <div className="buttons__numbers">
                          <Button
                            value={0}
                            pending={this.state.pendingOperation}
                            operation={this.state.operation}
                            handleClick={this.handleClick}
                          />
                          {buttons}
                      </div>
                      <button onClick={this.reset}>C</button>
                      <button onClick={this.addDecimal}>.</button>
                      <div className="buttons__operations">
                          <button onClick={() => this.prepareOperation('+')}>+</button>
                          <button onClick={() => this.prepareOperation('-')}>-</button>
                          <button onClick={() => this.prepareOperation('*')}>*</button>
                          <button onClick={() => this.prepareOperation('/')}>/</button>
                      </div>
                      <button onClick={this.calculate}>=</button>
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
