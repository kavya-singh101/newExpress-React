// import { useState } from 'react'
import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsComponent from './components/NewsComponent'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // greet = "!Have a Good day"
  Size = 6;
  state = {
    progress: 0
  }
  setProgress=(progress)=> {
    this.setState({ progress: progress })

  }
  render() {
    return (

      <div>

        <Router>
          <Navbar />

          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            {/* country={'us'} */}
            <Route exact path="/" element={<NewsComponent setProgress={this.setProgress} key={"top-headlines"} pageSize={this.Size} category={'General'} />} />
            <Route exact path="/business" element={<NewsComponent setProgress={this.setProgress} key={"Business"} pageSize={this.Size} category={'Business'} />} />
            <Route exact path="/entertainment" element={<NewsComponent setProgress={this.setProgress} key={"Entertainment"} pageSize={this.Size} category={'Entertainment'} />} />
            <Route exact path="/health" element={<NewsComponent setProgress={this.setProgress} key={"Health"} pageSize={this.Size} category={'Health'} />} />
            <Route exact path="/science" element={<NewsComponent setProgress={this.setProgress} key={"Science"} pageSize={this.Size} category={'Science'} />} />
            <Route exact path="/sports" element={<NewsComponent setProgress={this.setProgress} key={"Sports"} pageSize={this.Size} category={'Sports'} />} />
            <Route exact path="/technology" element={<NewsComponent setProgress={this.setProgress} key={"Technology"} pageSize={this.Size} category={'Technology'} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
