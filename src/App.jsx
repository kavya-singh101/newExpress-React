// import { useState } from 'react'
import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsComponent from './components/NewsComponent'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default class App extends Component {
  // greet = "!Have a Good day"
  Size=6;
  render() {
    return (
      
      <div>
        
        <Router>
          <Navbar />
          <Routes>
          {/* country={'us'} */}
            <Route exact path="/" element={<NewsComponent key={"top-headlines"} pageSize={this.Size} category={'General'} />} />
            <Route exact path="/business" element={<NewsComponent key={"Business"} pageSize={this.Size} category={'Business'} />} />
            <Route exact path="/entertainment" element={<NewsComponent key={"Entertainment"} pageSize={this.Size} category={'Entertainment'} />} />
            <Route exact path="/health" element={<NewsComponent key={"Health"} pageSize={this.Size} category={'Health'} />} />
            <Route exact path="/science" element={<NewsComponent key={"Science"} pageSize={this.Size} category={'Science'} />} />
            <Route exact path="/sports" element={<NewsComponent key={"Sports"} pageSize={this.Size} category={'Sports'} />} />
            <Route exact path="/technology" element={<NewsComponent key={"Technology"} pageSize={this.Size} category={'Technology'} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
