import React, { Component } from 'react';
import $ from 'jquery';

import FormularioCadastroAutor from './FormularioCadastroAutor'; 
import ListagemAutores from './ListagemAutores'; 

export default class AutorBox extends Component {

    constructor() {
        super();    
        this.state = {lista : []};
    }

    componentDidMount(){
        $.ajax({
            url:"http://localhost:8080/api/autores",
            dataType: 'json',
            success:function(response){    
                this.atualizaListagem(response);
            }.bind(this)
        });
    }    

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>            
                <div className="content" id="content">
                    <FormularioCadastroAutor atualizaListagem={this.atualizaListagem.bind(this)}/>
                    <ListagemAutores lista={this.state.lista}/>          
                </div>
            </div>    
        );
    }

    atualizaListagem(lista) {
        this.setState({lista:lista});
    }
}