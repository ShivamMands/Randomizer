import { combineReducers } from 'redux'
import membersReducer from '../reducer/members/membersreducer'
import confettiReducer from '../reducer/confetti/confettiReducer'
import teamsReducer from '../reducer/teams/teamsReducer'
import wheelPickerReducer from '../reducer/wheelPicker/wheelPickerReducer'
import timerReducer from '../reducer/timer/timerReducer'
const rootReducer = combineReducers({
  members: membersReducer,
  confetti: confettiReducer,
  teams: teamsReducer,
  wheelPicker: wheelPickerReducer,
  timer: timerReducer,
})

export default rootReducer
