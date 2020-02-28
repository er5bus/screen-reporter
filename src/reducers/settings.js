import { ACTIONS } from '../constants'


const settingsReducer = (state = { settings:null, error:null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.EDIT_SETTINGS_SUCCEDED : {
      return { ...state, settings: payload, error: null }
    }
    case ACTIONS.EDIT_SETTINGS_FAILED : {
      return { ...state, error: payload }
    }
    case ACTIONS.FETCH_SETTINGS_SUCCEDED : {
      return { ...state, settings: payload, error: null }
    }
    case ACTIONS.FETCH_SETTINGS_FAILED : {
      return { ...state, error: payload }
    }
    default: {
      return state
    }
  }
}

export default settingsReducer
