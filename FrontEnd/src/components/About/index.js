import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DataTable from '../../shared/Datatable/Datatable'
import Button from '@mui/material/Button'
import { makeStyles } from '@material-ui/styles'
import AddModal from '../../shared/addModal/AddModal'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const useStyles = makeStyles({
    heading: {
      margin: '0% 6% 3% 10%',
    },
    button: {
      background: '#FBD401 !important',
      color: '#022C43 !important',
      fontSize: '14px !important',
      fontWeight: '700 !important',
      '&:hover': {
        color: 'white',
        // background:
      },
    },
  })

  const classes = useStyles()

  return (
    <>
      <div className="container about-page">
        <div className={classes.heading}>
          <h2>Team Members</h2>
          <AddModal />
        </div>
        <div className="text-zone">
          <DataTable />
          {/* <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious software developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

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
          </div> */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
