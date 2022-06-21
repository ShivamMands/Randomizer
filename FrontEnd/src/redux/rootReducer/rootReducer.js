import { combineReducers } from 'redux'
import membersReducer from '../reducer/members/membersreducer'
import confettiReducer from '../reducer/confetti/confettiReducer'
import teamsReducer from '../reducer/teams/teamsReducer'
import wheelPickerReducer from '../reducer/wheelPicker/wheelPickerReducer'
const rootReducer = combineReducers({
  members: membersReducer,
  confetti: confettiReducer,
  teams: teamsReducer,
  wheelPicker: wheelPickerReducer,
})

export default rootReducer
