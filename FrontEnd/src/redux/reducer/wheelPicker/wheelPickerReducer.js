import {
  SHOW_WHEEL_PICKER,
  HIDE_WHEEL_PICKER,
} from '../../actions/wheelPicker/wheelPickerActionTypes'

const initialState = {
  loading: false,
  show: false,
}

const wheelPickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_WHEEL_PICKER:
      return {
        ...state,
        loading: true,
        show: true,
      }
    case HIDE_WHEEL_PICKER:
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

export default wheelPickerReducer
