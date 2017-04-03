import React, { Component } from 'react';
import SideMenu from '../SideMenu';

export default class Home extends Component {

    render() {
        return(
            <div id="layout">
                <SideMenu />
                <div id="main">
                    <div>
                        <div className="header">
                            <h1>Bem-Vindo</h1>
                        </div>
                    </div>                        
                </div>            
            </div>               
        );
    }
}
