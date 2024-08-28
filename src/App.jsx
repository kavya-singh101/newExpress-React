// import { useState } from 'react'
import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsComponent from './components/NewsComponent'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  // greet = "!Have a Good day"
  const Size = 6;
  const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API

const [progress,setProgress] = useState(0)
  
  return (

    <div>

      <Router>
        <Navbar />

        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          {/* country={'us'} */}
          <Route exact path="/" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key={"top-headlines"} pageSize={Size} category={'General'} />} />
          <Route exact path="/business" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key={"Business"} pageSize={Size} category={'Business'} />} />
          <Route exact path="/entertainment" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key={"Entertainment"} pageSize={Size} category={'Entertainment'} />} />
          <Route exact path="/health" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key={"Health"} pageSize={Size} category={'Health'} />} />
          <Route exact path="/science" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key={"Science"} pageSize={Size} category={'Science'} />} />
          <Route exact path="/sports" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key={"Sports"} pageSize={Size} category={'Sports'} />} />
          <Route exact path="/technology" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key={"Technology"} pageSize={Size} category={'Technology'} />} />
          <Route exact path="/search" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key={"search"} pageSize={Size} category={'search'} />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App;