import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_FAILURE,
  UPDATE_MEMBER_REQUEST,
  UPDATE_MEMBER_SUCCESS,
  UPDATE_MEMBER_FAILURE,
  DELETE_MEMBER_REQUEST,
  DELETE_MEMBER_SUCCESS,
  DELETE_MEMBER_FAILURE,
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

const addMemberRequest = () => {
  return {
    type: ADD_MEMBER_REQUEST,
  }
}

const addMemberSuccess = (MEMBERS) => {
  return {
    type: ADD_MEMBER_SUCCESS,
    payload: MEMBERS,
  }
}

const addMemberFailure = (error) => {
  return {
    type: ADD_MEMBER_FAILURE,
    payload: error,
  }
}

const updateMemberRequest = () => {
  return {
    type: UPDATE_MEMBER_REQUEST,
  }
}

const updateMemberSuccess = (MEMBERS) => {
  return {
    type: UPDATE_MEMBER_SUCCESS,
    payload: MEMBERS,
  }
}

const updateMemberFailure = (error) => {
  return {
    type: UPDATE_MEMBER_FAILURE,
    payload: error,
  }
}

const deleteMemberRequest = () => {
  return {
    type: DELETE_MEMBER_REQUEST,
  }
}

const deleteMemberSuccess = (MEMBERS) => {
  return {
    type: DELETE_MEMBER_SUCCESS,
    payload: MEMBERS,
  }
}

const deleteMemberFailure = (error) => {
  return {
    type: DELETE_MEMBER_FAILURE,
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

export const addMember = (member) => {
  return function (dispatch) {
    dispatch(addMemberRequest())
    axios({
      method: 'post',
      url: `http://localhost:3002/member/create`,
      data: member,
    })
      .then((response) => {
        const MEMBERS = response.data
        // dispatch(alertAction('MEMBERS Sent ...', true, 'success'))
        dispatch(addMemberSuccess(MEMBERS))
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(addMemberFailure(error.message))
      })
  }
}

export const updateMember = (member) => {
  return function (dispatch) {
    dispatch(updateMemberRequest())
    axios({
      method: 'post',
      url: `http://localhost:3002/member/update`,
      data: member,
    })
      .then((response) => {
        const MEMBERS = response.data
        // dispatch(alertAction('MEMBERS Sent ...', true, 'success'))
        dispatch(updateMemberSuccess(MEMBERS))
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(updateMemberFailure(error.message))
      })
  }
}

export const deleteMember = (id) => {
  return function (dispatch) {
    dispatch(deleteMemberRequest())
    console.log('id: ', id)
    axios({
      method: 'post',
      url: `http://localhost:3002/member/delete`,
      data: { id: id },
    })
      .then((response) => {
        const MEMBERS = response.data
        // dispatch(alertAction('MEMBERS Sent ...', true, 'success'))
        dispatch(deleteMemberSuccess(MEMBERS))
      })
      .catch((error) => {
        // dispatch(alertAction(`${error.message}`, true, 'error'))
        dispatch(deleteMemberFailure(error.message))
      })
  }
}
