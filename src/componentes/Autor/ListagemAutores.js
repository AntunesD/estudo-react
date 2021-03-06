import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import LoadAutores from './LoadAutores';

export default class ListagemAutores extends Component {

    constructor() {
        super();    
        this.state = {lista : []};
        this.setSubscriber();
    }

    componentDidMount(){
        this.atualizaListagem(
            new LoadAutores().load()
        );
    }    

    render() {
        return(
            <div>            
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.lista.map(function(autor){
                            return (
                                <tr key={autor.id}>
                                    <td>{autor.nome}</td>
                                    <td>{autor.email}</td>
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
        PubSub.subscribe('atualizar-autores', function(topic, response){
            this.atualizaListagem(response);
        }.bind(this));
    }

    atualizaListagem(lista) {
        this.setState({lista:lista});
    }    
}