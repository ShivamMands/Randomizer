import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import store from './redux/store/store'
import { getMembers } from './redux'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/members" element={<About />} />
          <Route path="/previousTeams" element={<Contact />} />
          <Route path="/teams" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
