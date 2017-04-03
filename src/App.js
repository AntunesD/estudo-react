import './css/pure-min.css';
import './css/side-menu.css';

import React, { Component } from 'react';
import SideMenu from './componentes/SideMenu';

class App extends Component {

    render() {    
        return (
            <div id="layout">
                <SideMenu />
                <div id="main">
                    <div>
                        {this.props.children}
                    </div>
                </div>            
            </div>   
        );
    }
}

export default App;
