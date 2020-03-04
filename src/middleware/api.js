import { ACTIONS, ENDPOINT, METHODS, API_BASE_URL } from '../constants'
import makeCall from '../utils/api' 


export const api = store => next => action => {
  if (!action || action.type !== ACTIONS.CALL_API ){
    return next(action)
  }

  const { actions, endpoint, method, jwt, params } = action.meta
  const { token=null } = store.getState().auth
  
  if (jwt && !token){
    console.log(token)
    return next(action)
  }
 
  if (actions.init){
    next(create_action(actions.init))
  }

  let headers = {}
  if (jwt) {
    headers = { Authorization: `Bearer  ${token}`}
  }
  
  makeCall(method, endpoint, action.payload, headers, params)
    .then( resp => next(create_action(actions.success, resp.data || action.payload)) )
    .catch(err => next(create_action(actions.fail, ( err.response && err.response.data) || {})))
}


const create_action = (type, payload = {}) =>
  ({
    type,
    payload
  })


export default api
