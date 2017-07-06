import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
// import Button from 'components/button'

class Button extends React.Component {
    render() {
        return <button onClick={this.props.handler}>{this.props.children}</button>;
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this);
        this.state = {number: 10};
    }

    onBtnClick(number) {
        console.log(this);

        this.setState({number: number});
    }

    // update(n) {
    //     this.setState({number: '5'});
    // }

    render() {
        console.log('this.state.numbe', this.state.number);
        return (
            <div className="calculator">
                <div className="screen">{ this.state.number }</div>
                <div className="numberButtons">
                    <div>
                        <Button handler={ this.onBtnClick(1) } updaetNumber={ this.update(1) }>1</Button>
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