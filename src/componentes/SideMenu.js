import React, { Component } from 'react';
import Li from "./Commons/Li";

export default class SideMenu extends Component {

    render() {
        return (
            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">Company</a>
                    <ul className="pure-menu-list">
                        <Li href="#" label="Home" />
                        <Li href="#" label="Autor" />
                        <Li href="#" label="Livro" />
                    </ul>
                </div>
            </div>
        );
    }
}