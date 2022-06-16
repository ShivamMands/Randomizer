import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
} from './membersActionTypes'
import store from '../../store/store'
import axios from 'axios'
// import { alertAction } from '../Alert/alertActions'

const fetchMembersRequest = () => {
  return {
    type: FETCH_MEMBERS_REQUEST,
  }
}

const fetchMembersSuccess = (MEMBERS) => {
  return {
    type: FETCH_MEMBERS_SUCCESS,
    payload: MEMBERS,
  }
}

const fetchMembersFailure = (error) => {
  return {
    type: FETCH_MEMBERS_FAILURE,
    payload: error,
  }
}

export const getMembers = () => {
  return function (dispatch) {
    dispatch(fetchMembersRequest())
    axios({
      method: 'get',
      url: `http://localhost:3002/`,
    })
      .then((response) => {
        const MEMBERS = response.data
        // dispatch(alertAction('MEMBERS Sent ...', true, 'success'))
        dispatch(fetchMembersSuccess(MEMBERS))
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(fetchMembersFailure(error.message))
      })
  }
}
