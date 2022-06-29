import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import {
  getMembers,
  createTeams,
  getTeams,
  getPreviousTeams,
  wheelPicker,
  getScrumMaster,
  toggleTeams,
  timer,
} from '../../redux'
import AnimatedLetters from '../AnimatedLetters'
import { useDispatch, useSelector } from 'react-redux'
import Confettii from '../../shared/confetti'
import PomodoroTimer from '../../shared/pomodoreTimer'
import './TotalList.css'

function TotalList() {
  const members = useSelector((store) => store.members.response)
  const [totalMembers, setTotalMembers] = useState(members.length)
  const [presenting, setPresenting] = useState(true)

  const showConfetti = useSelector((state) => state.confetti.show)
  const teamA = useSelector((store) => store.teams.teamA)
  const teamB = useSelector((store) => store.teams.teamB)
  const scrumMaster = useSelector((store) => store.teams.scrumMaster)
  const showTimer = useSelector((store) => store.timer.show)

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    dispatch(getMembers())
    dispatch(getTeams())
    dispatch(getPreviousTeams())
    dispatch(getScrumMaster())
  }, [])

  useEffect(() => {
    if (teamA && teamA.length > 0 && teamA[0].teamroles === 'Presenting') {
      setPresenting(true)
    } else {
      setPresenting(false)
    }
  }, [teamA, teamB])

  const dispatch = useDispatch()
  useEffect(() => {
    setTotalMembers(members.length)
  }, [members])

  const shuffleTeams = () => {
    dispatch(createTeams())
  }

  const pickScrumMaster = () => {
    dispatch(wheelPicker(true))
  }

  const switchPresentingTeam = () => {
    dispatch(toggleTeams())
  }

  const inlineBlock = {
    display: 'inline-block',
    padding: '1em 4em 1em 4em',
    whiteSpace: 'nowrap',
  }
  const membersDiv = {
    padding: '1em',
    float: 'left',
  }
  const btnStyle = {
    fontWeight: 400,
    fontSize: '15px',
    whiteSpace: 'nowrap',
  }

  const handleClick = (event, member) => {
    dispatch(timer(true, member.name))
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration')
    } else {
      event.target.style.setProperty('text-decoration', 'line-through')
    }
  }

  return (
    <div className="team-divider">
      {showConfetti ? <Confettii /> : ''}
      <Stack spacing={8} direction="row">
        <Button variant="contained" size="large" onClick={() => shuffleTeams()}>
          <span style={btnStyle}> Create Teams</span>
        </Button>

        {teamA.length > 0 ? (
          <Button
            variant="contained"
            size="large"
            style={btnStyle}
            onClick={() => pickScrumMaster()}
          >
            Pick Scrum Master
          </Button>
        ) : (
          ''
        )}
        <Button
          variant="contained"
          size="large"
          style={btnStyle}
          onClick={() => switchPresentingTeam(!presenting)}
        >
          Switch Presenting Team
        </Button>
      </Stack>
      <div style={membersDiv} className="members">
        {/* <h2>All Members</h2> */}
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'l', 'l', ' ', 'M', 'e', 'm', 'b', 'e', 'r', 's']}
            idx={15}
          />
        </h2>
        <h3>Total Members: {totalMembers}</h3>
        {members &&
          members.map((member) => <p key={member.id}>{member.name}</p>)}
      </div>
      <div style={{ display: 'flex' }} className="teams">
        <div style={inlineBlock} className="teamA">
          {/* <h2>Presenting</h2> */}
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
                <p key={member.id} onClick={(e) => handleClick(e, member)}>
                  {member.name}
                </p>
              ))}
            </>
          ) : (
            <>
              <h3>Team B</h3>
              {teamB.map((member) => (
                <p key={member.id} onClick={(e) => handleClick(e, member)}>
                  {member.name}
                </p>
              ))}
            </>
          )}
        </div>

        <div style={inlineBlock} className="teamB">
          {/* <h2>Questioner</h2> */}
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
          {/* <h2>Scrum Master</h2> */}
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

          {showTimer ? <PomodoroTimer /> : ''}
        </div>
      </div>
    </div>
  )
}

export default TotalList
