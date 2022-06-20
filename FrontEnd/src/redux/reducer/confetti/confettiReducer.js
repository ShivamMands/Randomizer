import {
  SHOW_CONFETTI,
  HIDE_CONFETTI,
} from '../../actions/confetti/confettiActionTypes'

const initialState = {
  loading: false,
  show: false,
}

const confettiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFETTI:
      return {
        ...state,
        loading: true,
        show: true,
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
