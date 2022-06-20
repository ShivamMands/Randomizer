import { SHOW_CONFETTI, HIDE_CONFETTI } from './confettiActionTypes'

const showConfetti = (message, type) => {
  return {
    type: SHOW_CONFETTI,
  }
}

const hideConfetti = () => {
  return {
    type: HIDE_CONFETTI,
  }
}

export const confetti = (show) => {
  return function (dispatch) {
    if (show) {
      dispatch(showConfetti())
    } else {
      dispatch(hideConfetti())
    }
  }
}
