import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
} from '../../actions/members/membersActionTypes'

const initialState = {
  loading: false,
  response: '',
  error: '',
  fetched: false,
}

const memberReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export default memberReducer
