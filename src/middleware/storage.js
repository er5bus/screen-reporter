import browser from '../utils/browserAPI'
import { ACTIONS, STORAGE_METHODS } from '../constants'


export const browserStorage = store => next => action => {
  if (!action || action.type !== ACTIONS.CALL_STORAGE || !action.meta ){
    return next(action)
  }

  const { actions, storage, method } = action.meta

  switch (method) {
    case STORAGE_METHODS.GET_ITEM : {
      const key = Object.keys(action.payload.criteria).pop()
      browser.storage.searchForItem(
        storage,
        browser.storage.createCriteria(key, browser.storage.criteria.EQ, action.payload.criteria[key]),
        (res) => next(create_action(actions.success, res)),
        (err) => next(create_action(actions.fail, err))
      )
      break
    }
    case STORAGE_METHODS.SET_ITEM : {
      browser.storage.setItem(
        storage,
        payload,
        (res) => next(create_action(actions.success, res)),
        (err) => next(create_action(actions.fail, err))
      )
      break
    }
    case STORAGE_METHODS.EDIT_ITEM : {
      const key = Object.keys(action.payload.criteria).pop()
      browser.storage.updateItem(
        storage,
        action.payload.data,
        browser.storage.createCriteria(key, browser.storage.criteria.EQ, action.payload.criteria[key]),
        (res) => next(create_action(actions.success, res)),
        (err) => next(create_action(actions.fail, err))
      )
      break
    }
    case STORAGE_METHODS.REMOVE_ITEM : {
      const key = Object.keys(action.payload.criteria).pop()
      browser.storage.removeItem(
        storage,
        browser.storage.createCriteria(key, browser.storage.criteria.EQ, action.payload.criteria[key]),
        (res) => next(create_action(actions.success, res)),
        (err) => next(create_action(actions.fail, err))
      )
      break
    }
    default : {
      return next(action)
    }
  }
}

const create_action = (type, payload = {}) =>
  ({
    type,
    payload
  })

export default browserStorage
