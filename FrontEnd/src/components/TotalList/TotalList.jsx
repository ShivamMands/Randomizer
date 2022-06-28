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
} from '../../redux'
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

  const handleClick = (event) => {
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
        <h2>All Members</h2>
        <h3>Total Members: {totalMembers}</h3>
        {members &&
          members.map((member) => <p key={member.id}>{member.name}</p>)}
      </div>
      <div style={{ display: 'flex' }} className="teams">
        <div style={inlineBlock} className="teamA">
          <h2>Presenting</h2>
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
          <h2>Questioner</h2>
          {presenting ? (
            <>
              <h3>Team B</h3>
              {teamB.map((member) => (
                <p key={member.id} onClick={handleClick}>
                  {member.name}
                </p>
              ))}
            </>
          ) : (
            <>
              <h3>Team A</h3>
              {teamA.map((member) => (
                <p key={member.id} onClick={handleClick}>
                  {member.name}
                </p>
              ))}
            </>
          )}
        </div>

        <div style={inlineBlock} className="scrumMaster">
          <h2>Scrum Master</h2>
          {scrumMaster ? <h3>{scrumMaster.name}</h3> : ''}
          <PomodoroTimer />
        </div>
      </div>
    </div>
  )
}

export default TotalList
