import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return ( 
        	<div className="row">
        	    <div className="col-md-12" Style="background-color: green; color:red; text-align:center;">
        	    Header Logo
        	    </div>
        	</div>
        );
    }
}

export default Header;