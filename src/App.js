import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Main from './component/MainComponent';
import { Provider } from 'react-redux';
import { CartProvider } from 'react-use-cart';
import {BrowserRouter} from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();
class App extends Component{

  render(){
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Main store={store}/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
  }
}

export default App;
