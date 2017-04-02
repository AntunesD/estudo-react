import React, { Component } from 'react';

export default class Li extends Component {

    render() {
        return (
            <li className="pure-menu-item">
                <a href={this.props.href} className="pure-menu-link">{this.props.label}</a>
            </li>
        );
    }
}