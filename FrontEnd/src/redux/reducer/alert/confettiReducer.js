import {
  SHOW_CONFETTI,
  HIDE_CONFETTI,
} from '../../actions/confetti/confettiActionTypes'

const initialState = {
  loading: false,
  message: '',
  show: false,
  type: '',
}

const confettiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFETTI:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
        show: true,
        type: action.payload.type,
      }
    case HIDE_CONFETTI:
      return {
        ...state,
        loading: false,
        message: '',
        show: false,
      }
    default:
      return state
  }
}

export default confettiReducer
