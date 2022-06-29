import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
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
    headingSection: {
      margin: '4% 0% 0% 10%',
    },
    heading: {
      textAlign: 'center',
      marginRight: '18%',
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
      <div className="about-page">
        <div className={classes.headingSection}>
          <h2 className={classes.heading}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'T',
                'e',
                'a',
                'm',
                ' ',
                'M',
                'e',
                'm',
                'b',
                'e',
                'r',
                's',
              ]}
              idx={15}
            />
          </h2>
          <AddModal />
        </div>
        <div className="text-zone">
          <DataTable />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
