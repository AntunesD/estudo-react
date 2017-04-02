import React, { Component } from 'react';
import $ from 'jquery';

export default class ListagemAutores extends Component {
    
    constructor() {
        super();    
        this.state = {lista : []};
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

    componentDidMount(){
        $.ajax({
            url:"http://localhost:8080/api/autores",
            dataType: 'json',
            success:function(resposta){    
                this.setState({lista:resposta});
            }.bind(this)
        });          
    }
}