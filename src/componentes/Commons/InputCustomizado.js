import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class InputCustomizado extends Component{

    constructor(props) {
        super(props);
        this.state = {msgErro:""};
        this.setSubscriber();
    }

	render() {
		return (
            <div className="pure-control-group">
                <label htmlFor={this.props.id}>{this.props.label}</label> 
                <input id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value}  onChange={this.props.onChange}/>                  
                <span className="erro">{this.state.msgErro}</span>
            </div>			
		);
	}

    setSubscriber() {
        PubSub.subscribe('form-error', function(topic, response){
            if (response.field === this.props.name) {
                this.setState({msgErro:response.defaultMessage});
            }
        }.bind(this));

        PubSub.subscribe('clear-errors', function(topic){
            this.setState({msgErro:''});
        }.bind(this));
    }
}
