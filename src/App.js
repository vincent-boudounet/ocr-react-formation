import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div className="App" class="container-fluid">
        <div class="row">
          <div class="col-md-offset-4 col-md-4 col-xs-12">
            <Products/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
