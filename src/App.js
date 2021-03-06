import React, { Component } from 'react'
import Header from './components/layout/Header.js'
import Home from './components/home/Home.js'
import PostList from './components/posts/PostList.js'
import AlbumsList from './components/albums/AlbumsList.js'
import PhotosList from "./components/photos/PhotosList"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom' // Router

class App extends Component {

  render() {
    return (
      <Router >
        <div className="App">
          <Header />
          <div id='App-container' className='container'>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={'/list'} component={PostList}></Route>
            <Route path={'/albums'} component={AlbumsList}></Route>
            <Route path={`/album/:albumId`} component={PhotosList}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
