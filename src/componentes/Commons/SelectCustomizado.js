import React, { Component } from 'react';

export default class SelectCustomizado extends Component{

    render() {
        return (
            <div className="pure-control-group">
                <label>{this.props.label}</label> 
                <select onChange={this.props.onChange}>
                    {
                        this.props.list.map(function(row){
                            return (
                                <option key={row.id} value={row.id}>{row.nome}</option>
                            );
                        })
                    }
                </select>
            </div> 
        );
    }
}
