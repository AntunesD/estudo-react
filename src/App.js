import './css/pure-min.css';
import './css/side-menu.css';

import React, { Component } from 'react';
import SideMenu from './componentes/SideMenu';
import AutorBox from './componentes/Autor/AutorBox';

class App extends Component {

    render() {    
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link"></a>
                <SideMenu />
                <div id="main">
                    <AutorBox />
                </div>            
            </div>     
        );
    }
}

export default App;
