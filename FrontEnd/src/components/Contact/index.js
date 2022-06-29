import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { useDispatch, useSelector } from 'react-redux'

import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const members = useSelector((store) => store.members.response)
  const [totalMembers, setTotalMembers] = useState(members.length)
  const [presenting, setPresenting] = useState(true)
  const form = useRef()

  const teamA = useSelector((store) => store.teams.previousTeamA)
  const teamB = useSelector((store) => store.teams.previousTeamB)
  const scrumMaster = useSelector((store) => store.teams.previousScrumMaster)

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    if (teamA && teamA.length > 0 && teamA[0].teamroles === 'Presenting') {
      setPresenting(true)
    } else {
      setPresenting(false)
    }
  }, [teamA, teamB])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_eqjd7nf',
        'template_ktnk8dt',
        form.current,
        'kIabluGHX_0UUPuxy'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  const inlineBlock = {
    display: 'inline-block',
    padding: '1em 4em 1em 4em',
    whiteSpace: 'nowrap',
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone-previous-teams">
          <h1 style={{ textAlign: 'center' }} className="previous-page-heading">
            Previous Teams
          </h1>

          <div style={{ display: 'flex' }} className="teams">
            <div style={inlineBlock} className="teamA">
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['P', 'r', 'e', 's', 'e', 'n', 't', 'i', 'n', 'g']}
                  idx={15}
                />
              </h2>
              {presenting ? (
                <>
                  <h3>Team A</h3>
                  {teamA.map((member) => (
                    <p key={member.id}>{member.name}</p>
                  ))}
                </>
              ) : (
                <>
                  <h3>Team B</h3>
                  {teamB.map((member) => (
                    <p key={member.id}>{member.name}</p>
                  ))}
                </>
              )}
            </div>

            <div style={inlineBlock} className="teamB">
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['Q', 'u', 'e', 's', 't', 'i', 'o', 'n', 'e', 'r']}
                  idx={15}
                />
              </h2>
              {presenting ? (
                <>
                  <h3>Team B</h3>
                  {teamB.map((member) => (
                    <p key={member.id}>{member.name}</p>
                  ))}
                </>
              ) : (
                <>
                  <h3>Team A</h3>
                  {teamA.map((member) => (
                    <p key={member.id}>{member.name}</p>
                  ))}
                </>
              )}
            </div>

            <div style={inlineBlock} className="scrumMaster">
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    'S',
                    'c',
                    'r',
                    'u',
                    'm',
                    ' ',
                    'M',
                    'a',
                    's',
                    't',
                    'e',
                    'r',
                  ]}
                  idx={15}
                />
              </h2>
              {scrumMaster ? <h3>{scrumMaster.name}</h3> : ''}
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

// import React, { useEffect, useState } from 'react'
// import './index.scss'
// import Typography from '@mui/material/Typography'

// function Contact() {
//   const AllMembers = {
//     display: 'inline-block',
//     padding: '1em 4em 1em 4em',
//     whiteSpace: 'nowrap',
//     margin: '1% 1% 1% 7%',
//   }
//   const Presenting = {
//     display: 'inline-block',
//     padding: '1em 4em 1em 4em',
//     whiteSpace: 'nowrap',
//     margin: '1% 1% 1% 8%',
//   }
//   const Questioner = {
//     display: 'inline-block',
//     padding: '1em 4em 1em 4em',
//     whiteSpace: 'nowrap',
//     margin: '1% 1% 1% -4%',
//   }
//   const ScrumMaster = {
//     display: 'inline-block',
//     padding: '1em 4em 1em 4em',
//     whiteSpace: 'nowrap',
//     margin: '1% 1% 1% -4%',
//   }
//   const membersDiv = {
//     padding: '1em !important',
//     float: 'left !important',
//     margin: '1% 1% 1% 19% !important',
//   }
//   const id = '62ac371b61b31bc71a1cc41b'
//   const btnStyle = {
//     fontWeight: 400,
//     fontSize: '15px',
//     whiteSpace: 'nowrap',
//   }

//   return (
//     <>
//       <div className="PreviousTeam">
//         <h2>Previous Team</h2>
//       </div>
//       <div style={{ display: 'flex' }} className="members">
//         <div style={{ display: 'flex' }} className="teams"></div>
//         <div style={Presenting} className="teamA">
//           <h2>Presenting</h2>
//         </div>
//         <div style={Questioner} className="teamB">
//           <h2>Questioner</h2>
//         </div>
//         <div style={ScrumMaster} className="scrumMaster">
//           <h2>Scrum Master</h2>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Contact
