import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import $ from 'jquery';

export default class ListagemLivros extends Component {

    constructor() {
        super();    
        this.state = {lista : []};
        this.setSubscriber();
    }

    componentDidMount(){
        $.ajax({
            url:"http://localhost:8080/api/livros",
            dataType: 'json',
            success:function(response){
                this.atualizaListagem(response);
            }.bind(this)
        });
    }    

    render() {
        return(
            <div>            
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Titulo</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.lista.map(function(livro){
                            return (
                                <tr key={livro.id}>
                                    <td>{livro.id}</td>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.preco}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table> 
            </div>   
        );
    }

    setSubscriber() {
        PubSub.subscribe('atualizar-livros', function(topic, response){
            this.atualizaListagem(response);
        }.bind(this));
    }

    atualizaListagem(lista) {
        this.setState({lista:lista});
    }    
}