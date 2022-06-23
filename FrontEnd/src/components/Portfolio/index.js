import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Button from '@mui/material/Button'
import './index.scss'
import portfolioData from '../../data/portfolio.json'
import TotalList from '../TotalList/TotalList'
import WheelPicker from '../../shared/WheelPicker'
import { wheelPicker } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  console.log(portfolioData)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })
  const dispatch = useDispatch()
  const showWheel = useSelector((store) => store.wheelPicker.show)

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      {showWheel ? (
        <div className="wheek-picker">
          <WheelPicker />
          <Button
            style={{ left: 50, color: '#98911B' }}
            onClick={() => dispatch(wheelPicker(false))}
            size="large"
            // variant="contained"
          >
            <ArrowBackIosIcon />
          </Button>
        </div>
      ) : (
        <div className="container portfolio-page">
          <TotalList />
        </div>
      )}

      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
