import React, { Component } from 'react';
import FormularioCadastroLivros from './FormularioCadastroLivros';
import ListagemLivros from './ListagemLivros';

export default class LivroBox extends Component {

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Cadastro de Livros</h1>
                </div>            
                <div className="content" id="content">
                    <FormularioCadastroLivros />       
                    <ListagemLivros />       
                </div>
            </div>
        );
    }
}