import { combineReducers } from 'redux'
import membersReducer from '../reducer/members/membersreducer'
import confettiReducer from '../reducer/confetti/confettiReducer'
const rootReducer = combineReducers({
  members: membersReducer,
  confetti: confettiReducer,
})

export default rootReducer
