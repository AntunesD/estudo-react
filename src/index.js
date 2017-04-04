import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './App';
import Home from './componentes/Home/Home';
import AutorBox from './componentes/Autor/AutorBox';
import LivroBox from './componentes/Livro/LivroBox';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/autor" component={AutorBox} />
            <Route path="/livro" component={LivroBox}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
