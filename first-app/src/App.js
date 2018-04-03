import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import SideMenu from './components/sidemenu/SideMenu';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
          <div className="container-fluid">
            <Header/>
            <div className="row">
               <div className="col-md-3">
                <SideMenu/>
                 </div>
               <div className="col-md-9">
               <div className="row">
                  Main Content and SPA area
               </div>
               <div className="row">
               <Footer/>
               </div>
               </div>
            </div>
          </div>
        );
    }
}

export default App;