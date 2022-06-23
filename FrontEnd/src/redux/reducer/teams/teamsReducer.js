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
  TOGGLE_TEAMS_REQUEST,
  TOGGLE_TEAMS_SUCCESS,
  TOGGLE_TEAMS_FAILURE,
} from '../../actions/teams/teamsActionTypes'

const initialState = {
  loading: false,
  error: '',
  fetched: false,
  teamA: [],
  teamB: [],
  teamCreated: false,
  previousTeamA: [],
  previousTeamB: [],
  scrumMaster: {},
  previousScrumMaster: {},
}

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        teamA: action.payload.teamA,
        teamB: action.payload.teamB,
        error: '',
        fetched: true,
      }
    case FETCH_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        teamA: [],
        teamB: [],
        error: action.payload,
        fetched: false,
      }
    case FETCH_GET_SCRUM_MASTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_GET_SCRUM_MASTER_SUCCESS:
      return {
        ...state,
        loading: false,
        scrumMaster: action.payload.currentScrumMaster,
        previousScrumMaster: action.payload.previousScrumMaster,
        error: '',
        fetched: true,
      }
    case FETCH_GET_SCRUM_MASTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        fetched: false,
      }
    case FETCH_SET_SCRUM_MASTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SET_SCRUM_MASTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        fetched: true,
      }
    case FETCH_SET_SCRUM_MASTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        fetched: false,
      }
    case FETCH_PREVIOUS_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PREVIOUS_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        previousTeamA: action.payload.teamA,
        previousTeamB: action.payload.teamB,
        error: '',
        fetched: true,
      }
    case FETCH_PREVIOUS_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        previousTeamA: [],
        previousTeamA: [],
        error: action.payload,
        fetched: false,
      }
    case CREATE_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CREATE_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        fetched: true,
        teamCreated: true,
      }
    case CREATE_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        fetched: false,
      }
    case TOGGLE_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case TOGGLE_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        teamA: action.payload.teamA,
        teamB: action.payload.teamB,
        fetched: true,
        teamCreated: true,
      }
    case TOGGLE_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        fetched: false,
      }

    default:
      return state
  }
}

export default teamsReducer
