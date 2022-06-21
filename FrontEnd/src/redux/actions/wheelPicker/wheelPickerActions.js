import { SHOW_WHEEL_PICKER, HIDE_WHEEL_PICKER } from './wheelPickerActionTypes'

const showWheelPicker = (message, type) => {
  return {
    type: SHOW_WHEEL_PICKER,
  }
}

const hideWheelPicker = () => {
  return {
    type: HIDE_WHEEL_PICKER,
  }
}

export const wheelPicker = (show) => {
  return function (dispatch) {
    if (show) {
      dispatch(showWheelPicker())
    } else {
      dispatch(hideWheelPicker())
    }
  }
}
