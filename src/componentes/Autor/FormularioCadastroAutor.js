import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import $ from 'jquery';

import AutorFormErrors from './AutorFormErrors';
import InputCustomizado from '../Commons/InputCustomizado';
import Button from '../Commons/Button';

export default class FormularioCadastroAutor extends Component {

    constructor() {
        super();    
        this.state = {nome:'',email:'',senha:''};
    }

    componentWillUpdate() {
        PubSub.publish('clear-errors', {});
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm.bind(this)} method="post">
                    <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome.bind(this)} label="Nome"/>                                              
                    <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail.bind(this)} label="Email"/>                                              
                    <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha.bind(this)} label="Senha"/>                                                                      
                    <Button type="submit" label="Gravar" />
                </form>
            </div>
        );
    }

    enviaForm(evento){
        evento.preventDefault();    
        $.ajax({
            url:'http://localhost:8080/api/autores',
            contentType:'application/json',
            dataType:'json',
            type:'post',
            data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
            success: function(response){
                PubSub.publish('atualizar-autores', response);
                this.setState({nome:'',email:'',senha:''});
            }.bind(this),
            error: function(response){
                if(response.status === 400) {
                    new AutorFormErrors().publishErrors(response.responseJSON);
                }
            }
        });
    }

    setNome(evento){
        this.setState({nome:evento.target.value});
    }

    setEmail(evento){
        this.setState({email:evento.target.value});
    }  

    setSenha(evento){
        this.setState({senha:evento.target.value});
    }    
}