import { ACTIONS } from '../constants'


const screenshotReducer = (state = { screenshot: null, error:null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.FETCH_SCREENSHOT_SUCCEDED : {
      return { ...state, screenshot: payload }
    }
    case ACTIONS.FETCH_SCREENSHOT_FAILED : {
      return { ...state, error: payload }
    }
    case ACTIONS.EDIT_SCREENSHOT_SUCCEDED : {
      return { ...state, screenshot: { ...state.screenshot, ...payload }}
    }
    case ACTIONS.EDIT_SCREENSHOT_FAILED : {
      return { ...state, error: payload }
    }
    case ACTIONS.REMOVE_SCREENSHOT_SUCCEDED : {
      return { ...state, screenshot: null}
    }
    case ACTIONS.REMOVE_SCREENSHOT_FAILED : {
      return { ...state, error: payload, screenshot: null }
    }
    case ACTIONS.REMOVE_MESSAGES : {
      return { ...state, error: null, success: null }
    }
    default: {
      return state
    }
  }
}

export default screenshotReducer
