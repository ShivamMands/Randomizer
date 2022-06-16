import { combineReducers } from 'redux'
import membersReducer from '../reducer/members/membersreducer'

const rootReducer = combineReducers({
  members: membersReducer,
})

export default rootReducer
