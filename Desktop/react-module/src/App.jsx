import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import WeatherDashboard from './pages/dashboard'
import Header from './components/header'
import WeatherFooter from './components/footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <footer/>
    </Router>
  )
}

export default App   