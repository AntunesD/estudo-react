import React, { Component } from 'react';

import FormularioCadastroAutor from './FormularioCadastroAutor'; 
import ListagemAutores from './ListagemAutores';

export default class AutorBox extends Component {

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>            
                <div className="content" id="content">
                    <FormularioCadastroAutor />
                    <ListagemAutores />          
                </div>
            </div>
        );
    }
}