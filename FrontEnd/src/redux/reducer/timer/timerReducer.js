import { PAUSE_TIMER, PLAY_TIMER } from '../../actions/timer/timerActionTypes'

const initialState = {
  play: false,
  show: false,
  activeMember: '',
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_TIMER:
      return {
        ...state,
        play: true,
        show: true,
        activeMember: action.payload,
      }
    case PAUSE_TIMER:
      return {
        ...state,
        play: false,
        show: true,
      }
    default:
      return state
  }
}

export default timerReducer
