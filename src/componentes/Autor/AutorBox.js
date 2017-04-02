import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import $ from 'jquery';

import FormularioCadastroAutor from './FormularioCadastroAutor'; 
import ListagemAutores from './ListagemAutores';

export default class AutorBox extends Component {

    constructor() {
        super();    
        this.state = {lista : []};
        this.setSubscriber();
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
                    <FormularioCadastroAutor />
                    <ListagemAutores lista={this.state.lista}/>          
                </div>
            </div>    
        );
    }

    setSubscriber() {
        PubSub.subscribe('atualizar-autores', function(topic, response){
            this.atualizaListagem(response);
        }.bind(this));
    }

    atualizaListagem(lista) {
        this.setState({lista:lista});
    }
}