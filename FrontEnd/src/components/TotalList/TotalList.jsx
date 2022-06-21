import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import store from '../../redux/store/store'
import {
  getMembers,
  confetti,
  createTeams,
  getTeams,
  getPreviousTeams,
  wheelPicker,
  getScrumMaster,
} from '../../redux'
import { useDispatch, useSelector } from 'react-redux'
import Confettii from '../../shared/confetti'
import './TotalList.css'

function TotalList() {
  const members = useSelector((store) => store.members.response)
  const [list, setList] = useState(members)
  const [totalMembers, setTotalMembers] = useState(members.length)
  const [presenting, setPresenting] = useState(true)
  // const [scrumMaster, setScrumMaster] = useState({
  //   name: '',
  // })

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

  const dispatch = useDispatch()
  useEffect(() => {
    setTotalMembers(members.length)
  }, [members])

  const shuffleTeams = () => {
    dispatch(createTeams())
    dispatch(confetti(true))
    setTimeout(() => {
      dispatch(confetti(false))
    }, 8000)
  }

  const pickScrumMaster = () => {
    dispatch(wheelPicker(true))
    let master = ''
    if (presenting) {
      master = teamB[Math.floor(Math.random() * teamB.length)]
    } else {
      master = teamA[Math.floor(Math.random() * teamA.length)]
    }
    // setScrumMaster(master)
  }

  const switchPresentingTeam = () => {
    setPresenting(!presenting)
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
  const id = '62ac371b61b31bc71a1cc41b'
  const btnStyle = {
    fontWeight: 400,
    fontSize: '15px',
    whiteSpace: 'nowrap',
  }

  console.log('totalMembers: ', totalMembers)
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
          <h2>Scrum Master</h2>
          {scrumMaster ? <h3>{scrumMaster.name}</h3> : ''}
        </div>
      </div>
    </div>
  )
}

export default TotalList
