import './css/pure-min.css';
import './css/side-menu.css';

import React, { Component } from 'react';
import $ from 'jquery';

import SideMenu from './componentes/SideMenu';
import FormularioCadastroAutor from './componentes/Autor/FormularioCadastroAutor';
import ListagemAutores from './componentes/Autor/ListagemAutores';

class App extends Component {

    render() {    
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link"></a>
                <SideMenu />
                <div id="main">
                    <div className="header">
                        <h1>Cadastro de Autores</h1>
                    </div>
                    <div className="content" id="content">
                        <FormularioCadastroAutor />
                        <ListagemAutores />          
                    </div>
                </div>            
            </div>     
        );
    }
}

export default App;
