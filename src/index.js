import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'

import App from './App';
import AutorBox from './componentes/Autor/AutorBox';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/autor" component={AutorBox} />
        <Route path="/livro" component={App}/>
    </Router>,
    document.getElementById('root')
);
