import { ACTIONS } from '../constants'


const settingsReducer = (state = { settings:null, success: null, error:null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.EDIT_SETTINGS_SUCCEDED : {
      return { ...state, settings: payload, success: "Settings Has been edited successfully.", error: null }
    }
    case ACTIONS.EDIT_SETTINGS_FAILED : {
      return { ...state, error: payload, success: null }
    }
    case ACTIONS.FETCH_SETTINGS_SUCCEDED : {
      return { ...state, settings: payload, error: null }
    }
    case ACTIONS.FETCH_SETTINGS_FAILED : {
      return { ...state, error: payload }
    }
    case ACTIONS.REMOVE_MESSAGES : {
      return { ...state, error: null, success: null }
    }
    default: {
      return state
    }
  }
}

export default settingsReducer
