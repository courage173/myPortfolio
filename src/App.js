import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import store from './store'
import Posts from './component/Post'
import Postform from './component/Postform';
import {Provider} from 'react-redux'





class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <h1>
           
         </h1>
          
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
      </Provider>
    );
    
  }
}

export default App;
