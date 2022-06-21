import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FETCH_PREVIOUS_TEAMS_REQUEST,
  FETCH_PREVIOUS_TEAMS_SUCCESS,
  FETCH_PREVIOUS_TEAMS_FAILURE,
  FETCH_GET_SCRUM_MASTER_REQUEST,
  FETCH_GET_SCRUM_MASTER_SUCCESS,
  FETCH_GET_SCRUM_MASTER_FAILURE,
  FETCH_SET_SCRUM_MASTER_REQUEST,
  FETCH_SET_SCRUM_MASTER_SUCCESS,
  FETCH_SET_SCRUM_MASTER_FAILURE,
  CREATE_TEAMS_REQUEST,
  CREATE_TEAMS_SUCCESS,
  CREATE_TEAMS_FAILURE,
} from './teamsActionTypes'
import store from '../../store/store'
import axios from 'axios'

const fetchTeamsRequest = () => {
  return {
    type: FETCH_TEAMS_REQUEST,
  }
}

const fetchTeamsSuccess = (TEAMS) => {
  return {
    type: FETCH_TEAMS_SUCCESS,
    payload: TEAMS,
  }
}

const fetchTeamsFailure = (error) => {
  return {
    type: FETCH_TEAMS_FAILURE,
    payload: error,
  }
}

const fetchGetScrumMasterRequest = () => {
  return {
    type: FETCH_GET_SCRUM_MASTER_REQUEST,
  }
}

const fetchGetScrumMasterSuccess = (TEAMS) => {
  return {
    type: FETCH_GET_SCRUM_MASTER_SUCCESS,
    payload: TEAMS,
  }
}

const fetchGetScrumMasterFailure = (error) => {
  return {
    type: FETCH_GET_SCRUM_MASTER_FAILURE,
    payload: error,
  }
}
const fetchSetScrumMasterRequest = () => {
  return {
    type: FETCH_SET_SCRUM_MASTER_REQUEST,
  }
}

const fetchSetScrumMasterSuccess = (TEAMS) => {
  return {
    type: FETCH_SET_SCRUM_MASTER_SUCCESS,
    payload: TEAMS,
  }
}

const fetchSetScrumMasterFailure = (error) => {
  return {
    type: FETCH_SET_SCRUM_MASTER_FAILURE,
    payload: error,
  }
}

const fetchPreviousTeamsRequest = () => {
  return {
    type: FETCH_PREVIOUS_TEAMS_REQUEST,
  }
}

const fetchPreviousTeamsSuccess = (TEAMS) => {
  return {
    type: FETCH_PREVIOUS_TEAMS_SUCCESS,
    payload: TEAMS,
  }
}

const fetchPreviousTeamsFailure = (error) => {
  return {
    type: FETCH_PREVIOUS_TEAMS_FAILURE,
    payload: error,
  }
}

const createTeamsRequest = () => {
  return {
    type: CREATE_TEAMS_REQUEST,
  }
}

const createTeamsSuccess = (TEAMSS) => {
  return {
    type: CREATE_TEAMS_SUCCESS,
    payload: TEAMSS,
  }
}

const createTeamsFailure = (error) => {
  return {
    type: CREATE_TEAMS_FAILURE,
    payload: error,
  }
}

export const getTeams = () => {
  return function (dispatch) {
    dispatch(fetchTeamsRequest())
    axios({
      method: 'get',
      url: `http://localhost:3002/team/currentTeam`,
    })
      .then((response) => {
        const TEAMSS = response.data
        const teamA = []
        const teamB = []
        TEAMSS &&
          TEAMSS.map((x) => {
            if (x.team === 'teamA') {
              teamA.push(x)
            } else {
              teamB.push(x)
            }
          })
        const finalTeams = {
          teamA: teamA,
          teamB: teamB,
        }
        // dispatch(alertAction('TEAMSS Sent ...', true, 'success'))
        dispatch(fetchTeamsSuccess(finalTeams))
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(fetchTeamsFailure(error.message))
      })
  }
}

export const createTeams = (member) => {
  return function (dispatch) {
    dispatch(createTeamsRequest())
    axios({
      method: 'post',
      url: `http://localhost:3002/team/create`,
      data: member,
    })
      .then((response) => {
        const TEAMS = response.data
        dispatch(createTeamsSuccess(TEAMS))
        dispatch(getTeams())
        dispatch(getPreviousTeams())
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(createTeamsFailure(error.message))
      })
  }
}

export const getPreviousTeams = () => {
  return function (dispatch) {
    dispatch(fetchPreviousTeamsRequest())
    axios({
      method: 'get',
      url: `http://localhost:3002/team/prev`,
    })
      .then((response) => {
        const TEAMSS = response.data
        const teamA = []
        const teamB = []
        TEAMSS &&
          TEAMSS.map((x) => {
            if (x.team === 'teamA') {
              teamA.push(x)
            } else {
              teamB.push(x)
            }
          })
        const finalTeams = {
          teamA: teamA,
          teamB: teamB,
        }
        // dispatch(alertAction('TEAMSS Sent ...', true, 'success'))
        dispatch(fetchPreviousTeamsSuccess(finalTeams))
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(fetchPreviousTeamsFailure(error.message))
      })
  }
}

export const getScrumMaster = () => {
  return function (dispatch) {
    dispatch(fetchGetScrumMasterRequest())
    axios({
      method: 'get',
      url: `http://localhost:3002/team/getScrumMaster`,
    })
      .then((response) => {
        const scrumMaster = response.data
        console.log('sc data: ', scrumMaster)
        // dispatch(alertAction('TEAMSS Sent ...', true, 'success'))
        dispatch(fetchGetScrumMasterSuccess(scrumMaster))
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(fetchGetScrumMasterFailure(error.message))
      })
  }
}

export const setScrumMaster = (data) => {
  console.log('set scrum: ', data)
  return function (dispatch) {
    dispatch(fetchSetScrumMasterRequest())
    axios({
      method: 'post',
      url: `http://localhost:3002/team/scrum`,
      data: data,
    })
      .then((response) => {
        const scrumMaster = response.data
        console.log('response of scrumMaster: ', scrumMaster.data)
        // dispatch(alertAction('TEAMSS Sent ...', true, 'success'))
        dispatch(fetchSetScrumMasterSuccess(data))
        dispatch(getScrumMaster())
        // dispatch(getScrumMaster)
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(fetchSetScrumMasterFailure(error.message))
      })
  }
}
