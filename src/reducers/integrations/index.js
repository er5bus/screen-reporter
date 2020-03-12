import { ACTIONS } from '../../constants'
import trelloReducer from './trello'

import { combineReducers } from 'redux'


const integrationReducer = (state = { integrations: [], success: null, error:null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.ADD_INTEGRATION_SUCCEDED : {
      return { 
        ...state, 
        error: null,
        success: "New integrations has been added successfully.", 
        integrations: state.integrations.concat(payload) 
      }
    }
    case ACTIONS.ADD_INTEGRATION_FAILED : {
      return { ...state, error: payload, success: null }
    }
    case ACTIONS.FETCH_INTEGRATION_SUCCEDED : {
      return { ...state, integrations: payload.items, error: null }
    }
    case ACTIONS.FETCH_INTEGRATION_FAILED : {
      return { ...state, error: payload }
    }
    case ACTIONS.EDIT_INTEGRATION_SUCCEDED : {
      return { 
        ...state, 
        success: "An integration has been set as active.", 
        error: null, 
        integrations: state.integrations.map((item) => item.id !== payload.id ? {...item, active: false} : {...item, ...payload}) 
      }
    }
    case ACTIONS.EDIT_INTEGRATION_FAILED : {
      return { ...state, error: payload, success: null }
    }
    case ACTIONS.REMOVE_INTEGRATION_SUCCEDED : {
      return { 
        ...state, 
        error: null, 
        success: "An integration has been removed successfully.", 
        integrations: state.integrations.filter((item) => item.id !== payload.id )
      }
    }
    case ACTIONS.REMOVE_INTEGRATION_FAILED : {
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

export default combineReducers({
  integrationsList: integrationReducer,
  trello: trelloReducer
})
