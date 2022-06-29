import { PAUSE_TIMER, PLAY_TIMER } from './timerActionTypes'

const playTimer = (name) => {
  return {
    type: PLAY_TIMER,
    payload: name,
  }
}

const pauseTimer = () => {
  return {
    type: PAUSE_TIMER,
  }
}

export const timer = (play, name) => {
  return function (dispatch) {
    if (play) {
      dispatch(playTimer(name))
    } else {
      dispatch(pauseTimer())
    }
  }
}
