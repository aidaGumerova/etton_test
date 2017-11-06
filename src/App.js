import React, { Component } from 'react'
import Header from './components/Header.js'
import Home from './components/Home.js'
import PostList from './components/posts/PostList.js'
import Albums from './components/albums/Albums.js'
import Albums2 from './components/albums/Albums2.js'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Photos from "./components/albums/Photos";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // Router

class App extends Component {

  render() {//<Navbar />
    return (
      <Router >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Header />
          <div id='App-container' className='container'>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={'/list'} component={PostList}></Route>
            <Route path={'/albums'} component={Albums}></Route>
            <Route path={`/album/:albumId`} component={Photos}></Route>
            <Route path={`/albums2`} component={Albums2}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
