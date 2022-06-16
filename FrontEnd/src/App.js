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
  const members = useSelector((store) => store.members.response)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMembers())
  }, [])

  console.log('members: ', members)
  // useEffect(() => {
  //   showallMember()
  // }, [])

  // const showallMember = async () => {
  //   const members = await fetch('http://localhost:3002/', {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Credentials': true,
  //     },
  //   })
  //   const allmembers = await members.json()
  //   console.log('this is all data', allmembers)
  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
