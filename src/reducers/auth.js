import { ACTIONS, INIT_STATE } from '../constants'


const authReducer = (state = { currentUser:null, token:null, success:null, error:null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CREATE_ACCOUNT_SUCCEEDED : {
      const { access_token, ...currentUser } = payload
      return { ...state, currentUser, token: access_token, error: null }
    }
    case ACTIONS.CREATE_ACCOUNT_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.RESET_PASSWORD_SUCCEDED : {
      return { ...state, success: payload, error: null }
    }
    case ACTIONS.RESET_PASSWORD_FAILED : {
      return { ...state, error: payload, success: null }
    }

    case ACTIONS.LOGIN_ACCOUNT_SUCCEDED : {
      const { access_token, ...currentUser } = payload
      return { ...state, currentUser, token: access_token }
    }
    case ACTIONS.LOGIN_ACCOUNT_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.LOGOUT_ACCOUNT_SUCCEDED: {
      return { ...INIT_STATE, success: payload }
    }
    case ACTIONS.LOGOUT_ACCOUNT_FAILED : {
      return { ...INIT_STATE, error: payload }
    }

    case ACTIONS.UPDATE_ACCOUNT_SUCCEDED: {
      return { ...state, currentUser: { ...state.currentUser, ...payload }, success: "Your account has been updated successfully.", error: null }
    }
    case ACTIONS.UPDATE_ACCOUNT_FAILED: {
      return { ...state, error: payload, success: null }
    }

    case ACTIONS.REMOVE_MESSAGES : {
      return { ...state, error: null, success: null }
    }
    default: {
      return state
    }
  }
}


export default authReducer
