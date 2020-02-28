import { combineReducers } from 'redux'

// reducers
import authReducer from './auth'
import integrationReducer from './integrations'
import settingsReducer from './settings'
import screenshotReducer from './screenshot'


export default combineReducers({
  auth: authReducer,
  integrations: integrationReducer,
  settings: settingsReducer,
  screenshots: screenshotReducer 
})
