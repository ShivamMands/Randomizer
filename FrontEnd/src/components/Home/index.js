import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // const nameArray = ['h', 'i', 'v', 'a', 'm']
  const nameArray = [' ', 'R', 'a', 'n', 'd', 'o', 'm', 'i', 'z', 'e', 'r']
  const jobArray = ['L', 'e', 't', 's', ' ', 'B', 'e', 'g', 'i', 'n', '.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
