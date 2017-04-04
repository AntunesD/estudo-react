import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import $ from 'jquery';

import FormErrors from '../Commons/FormErrors';
import LoadAutores from '../Autor/LoadAutores';
import InputCustomizado from '../Commons/InputCustomizado';
import SelectCustomizado from '../Commons/SelectCustomizado';
import Button from '../Commons/Button';

export default class FormularioCadastroLivros extends Component {

    constructor() {
        super();    
        this.state = {titulo:'',preco:'',autorId:'', autorList:[]};
    }

    componentDidMount() {
        this.setAutorList(
            new LoadAutores().load()
        );
    }

    componentWillUpdate() {
        PubSub.publish('clear-errors', {});
    }

    render() {
        return(
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm.bind(this)} method="post">
                    <InputCustomizado id="titulo" type="text" name="titulo" value={this.state.titulo} 
                        onChange={this.setTitulo.bind(this)} label="Titulo"/>
 
                    <InputCustomizado id="preco" type="number" name="preco" value={this.state.preco} 
                        onChange={this.setPreco.bind(this)} label="Preço"/>                                              
 
                    <SelectCustomizado list={this.state.autorList} label="AutorId" onChange={this.setAutorId.bind(this)} />

                    <Button type="submit" label="Gravar" />
                </form>
            </div>
        );
    }

    enviaForm(evento){
        evento.preventDefault();    
        $.ajax({
            url:'http://localhost:8080/api/livros',
            contentType:'application/json',
            dataType:'json',
            type:'post',
            data: JSON.stringify({titulo:this.state.titulo, preco:this.state.preco, autorId:this.state.autorId}),
            success: function(response){
                PubSub.publish('atualizar-livros', response);
                this.setState({titulo:'',preco:'',autorId:''});
            }.bind(this),
            error: function(response){
                new FormErrors().publishErrors(response.responseJSON);
            }
        });
    }    

    setTitulo(evento){
        this.setState({titulo:evento.target.value});
    }

    setPreco(evento){
        this.setState({preco:evento.target.value});
    }  

    setAutorId(evento){
        this.setState({autorId:evento.target.value});
    }

    setAutorList(list) {
        this.setState({autorList:list})
    }
}