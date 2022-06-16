import { combineReducers } from 'redux'
import memberReducer from '../reducer/members/membersreducer'
// import supportReducer from "../reducers/support/supportReducer";
// import userReducer from "../reducers/user/userReducer";
// import adminAffiliatesReducer from "../reducers/adminAffiliates/adminAffiliatesReducer";
// import addAffiliateReducer from "../reducers/adminAffiliates/addAffiliateReducer";
// import editAffiliateReducer from "../reducers/adminAffiliates/editAffiliateReducer";
// import deleteAffiliateReducer from "../reducers/adminAffiliates/deleteAffiliateReducer";
// import revenueByReducer from "../reducers/performance/revenueByReducer";
// import weeklyRevenuesReducer from "../reducers/performance/weeklyRevenuesReducer";
// import alertReducer from "../reducers/alert/alertReducer";
// import exportReducer from "../reducers/export/exportReducer";
// import emailReducer from "../reducers/email/emailReducer";
// import resetPasswordReducer from "../reducers/resetPassword/resetPasswordReducer";
// import forgotPasswordReducer from "../reducers/forgotPassword/forgotPasswordReducer";
// import statementsReducer from "../reducers/statements/statementsReducer";
// import deleteStatementReducer from "../reducers/statements/deleteStatementReducer";
// import uploadStatementReducer from "../reducers/statements/uploadStatementReducer";

const rootReducer = combineReducers({
  members: memberReducer,
  // user: userReducer,
  // support: supportReducer,
  // admin: adminAffiliatesReducer,
  // revenueBy: revenueByReducer,
  // weeklyRevenues: weeklyRevenuesReducer,
  // addAffiliate: addAffiliateReducer,
  // editAffiliate: editAffiliateReducer,
  // deleteAffiliate: deleteAffiliateReducer,
  // alert: alertReducer,
  // export: exportReducer,
  // email: emailReducer,
  // resetPassword: resetPasswordReducer,
  // forgotPassword: forgotPasswordReducer,
  // statements: statementsReducer,
  // deleteStatement: deleteStatementReducer,
  // uploadStatement: uploadStatementReducer,
})

export default rootReducer
