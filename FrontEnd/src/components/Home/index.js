import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Confettii from '../../shared/confetti'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './Logo'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const [height, setHeight] = useState(null)
  // const [width, setWidth] = useState(null)
  // const confettiRef = useRef(null)

  // useEffect(() => {
  //   setHeight(confettiRef.current.clientWidth)
  //   setWidth(confettiRef.current.clientWidth)
  // }, [])

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
          <Link to="/portfolio" className="flat-button">
            <b> CREATE TEAMS </b>
          </Link>
        </div>
        <Logo />
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>{' '}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
