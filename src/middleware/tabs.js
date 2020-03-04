import { ACTIONS, PAGE } from '../constants'
import browser from '../utils/browserAPI' 


export const tab = store => next => action => {
  if (!action || action.type !== ACTIONS.CALL_TAB ){
    return next(action)
  }
 
  browser.tab.redirectToPage(PAGE, action.payload)
}


export default tab
