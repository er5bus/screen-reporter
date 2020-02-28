import { ACTIONS } from '../../constants'
import trelloReducer from './trello'

import { combineReducers } from 'redux'


const integrationReducer = (state = { integrations: [], error:null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.ADD_INTEGRATION_SUCCEDED : {
      return { ...state, integrations: state.integrations.map((item) => item.active ? {...item, active: false} : item).concat(payload) }
    }
    case ACTIONS.ADD_INTEGRATION_FAILED : {
      console.log(payload)
      return { ...state, error: payload }
    }
    case ACTIONS.FETCH_INTEGRATION_SUCCEDED : {
      return { ...state, integrations: payload.items }
    }
    case ACTIONS.FETCH_INTEGRATION_FAILED : {
      return { ...state, error: payload }
    }
    case ACTIONS.EDIT_INTEGRATION_SUCCEDED : {
      return { ...state, integrations: state.integrations.map((item) => item.id !== payload.id ? {...item, active: false} : {...item, ...payload}) }
    }
    case ACTIONS.EDIT_INTEGRATION_FAILED : {
      return { ...state, error: payload }
    }
    case ACTIONS.REMOVE_INTEGRATION_SUCCEDED : {
      return { ...state, integrations: state.integrations.filter((item) => item.id !== payload.id )}
    }
    case ACTIONS.REMOVE_INTEGRATION_FAILED : {
      return { ...state, error: payload }
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
