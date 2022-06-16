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
} from '../../actions/members/membersActionTypes'

const initialState = {
  loading: false,
  response: '',
  error: '',
  fetched: false,
  memberAdded: {},
  memberUpdated: {},
  memberDelete: {},
}

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
        error: '',
        fetched: true,
      }
    case FETCH_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        response: '',
        error: action.payload,
        fetched: false,
      }
    case ADD_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        memberAdded: action.payload,
        fetched: true,
      }
    case ADD_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        response: '',
        error: action.payload,
        fetched: false,
      }
    case UPDATE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        memberUpdated: action.payload,
        fetched: true,
      }
    case UPDATE_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        response: '',
        error: action.payload,
        fetched: false,
      }
    case DELETE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        memberDeleted: action.payload,
        fetched: true,
      }
    case DELETE_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        response: '',
        error: action.payload,
        fetched: false,
      }

    default:
      return state
  }
}

export default membersReducer
