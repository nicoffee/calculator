import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss'

const user = {
    avatarUrl: 'qwe'
};

const element = (
    <h1 className="Test">
        Hello, Ga!
    </h1>
);

const element = <a href={user.avatarUrl} />;

let hello = () => console.log('hello!');

ReactDOM.render(
    element,
    document.getElementById('root')
);