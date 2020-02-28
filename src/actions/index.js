import { ACTIONS, STORAGE, STORAGE_METHODS, HTTP_METHODS, ENDPOINT } from '../constants'


export const register = (payload) => 
  ({
    type: ACTIONS.CALL_API,
    payload,
    meta: {
      actions: {
        success: ACTIONS.CREATE_ACCOUNT_SUCCEEDED,
        fail: ACTIONS.CREATE_ACCOUNT_FAILED
      },
      endpoint: ENDPOINT.REGISTER,
      method: HTTP_METHODS.POST
    }
  })


export const editProfile = (payload, param) =>
  ({
    type: ACTIONS.CALL_API,
    payload,
    meta: {
      actions: {
        success: ACTIONS.UPDATE_ACCOUNT_SUCCEDED,
        fail: ACTIONS.UPDATE_ACCOUNT_FAILED
      },
      endpoint: ENDPOINT.USER.replace(/:param/gi, param),
      method: HTTP_METHODS.PUT
    }
  })


export const login = (payload) => 
  ({
    type: ACTIONS.CALL_API,
    payload,
    meta: {
      actions: {
        success: ACTIONS.LOGIN_ACCOUNT_SUCCEDED,
        fail: ACTIONS.LOGIN_ACCOUNT_FAILED
      },
      endpoint: ENDPOINT.LOGIN,
      method: HTTP_METHODS.POST
    }
  })


export const resetPassword = (param) =>
  ({
    type: ACTIONS.CALL_API,
    meta: {
      actions: {
        success: ACTIONS.RESET_PASSWORD_SUCCEDED,
        fail: ACTIONS.RESET_PASSWORD_FAILED
      },
      endpoint: ENDPOINT.RESET.replace(/:param/gi, param),
      method: HTTP_METHODS.POST
    }
  })


export const logout = (payload) =>
  ({
    type: ACTIONS.CALL_API,
    meta: {
      actions: {
        success: ACTIONS.LOGOUT_ACCOUNT_SUCCEDED,
        fail: ACTIONS.LOGOUT_ACCOUNT_FAILED
      },
      endpoint: ENDPOINT.LOGOUT,
      method: HTTP_METHODS.DELETE,
      jwt: true
    }
  })


export const editSettings = (payload) =>
  ({
    type: ACTIONS.CALL_API,
    payload,
    meta: {
      actions: {
        success: ACTIONS.EDIT_SETTINGS_SUCCEDED,
        fail: ACTIONS.EDIT_SETTINGS_FAILED
      },
      endpoint: ENDPOINT.SETTINGS,
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const fetchSettings = () =>
  ({
    type: ACTIONS.CALL_API,
    meta: {
      actions: {
        success: ACTIONS.FETCH_SETTINGS_SUCCEDED,
        fail: ACTIONS.FETCH_SETTINGS_FAILED
      },
      endpoint: ENDPOINT.SETTINGS,
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })


export const addIntegration = (payload) =>
  ({
    type: ACTIONS.CALL_API,
    payload,
    meta: {
      actions: {
        success: ACTIONS.ADD_INTEGRATION_SUCCEDED,
        fail: ACTIONS.ADD_INTEGRATION_FAILED
      },
      endpoint: ENDPOINT.INTEGRATIONS,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const fetchIntegrations = () =>
  ({
    type: ACTIONS.CALL_API,
    meta: {
      actions: {
        success: ACTIONS.FETCH_INTEGRATION_SUCCEDED,
        fail: ACTIONS.FETCH_INTEGRATION_FAILED
      },
      endpoint: ENDPOINT.INTEGRATIONS,
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })


export const editIntegration = (payload, param) =>
  ({
    type: ACTIONS.CALL_API,
    payload,
    meta: {
      actions: {
        success: ACTIONS.EDIT_INTEGRATION_SUCCEDED,
        fail: ACTIONS.EDIT_INTEGRATION_FAILED
      },
      endpoint: ENDPOINT.INTEGRATION.replace(/:param/gi, param),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const removeIntegration = (param) =>
  ({
    type: ACTIONS.CALL_API,
    payload: { id: param},
    meta: {
      actions: {
        success: ACTIONS.REMOVE_INTEGRATION_SUCCEDED,
        fail: ACTIONS.REMOVE_INTEGRATION_FAILED
      },
      endpoint: ENDPOINT.INTEGRATION.replace(/:param/gi, param),
      method: HTTP_METHODS.DELETE,
      jwt: true
    }
  })


export const fetchScreenshot = (criteria) =>
  ({
    type: ACTIONS.CALL_STORAGE,
    payload: { criteria },
    meta: {
      actions: {
        success: ACTIONS.FETCH_SCREENSHOT_SUCCEDED,
        fail: ACTIONS.FETCH_SCREENSHOT_FAILED
      },
      storage: STORAGE.SCREEN_CAPTURE,
      method: STORAGE_METHODS.GET_ITEM
    }
  })


export const editScreenshot = (data, criteria) =>
  ({
    type: ACTIONS.CALL_STORAGE,
    payload: { data, criteria },
    meta: {
      actions: {
        success: ACTIONS.EDIT_SCREENSHOT_SUCCEDED,
        fail: ACTIONS.EDIT_SCREENSHOT_FAILED
      },
      storage: STORAGE.SCREEN_CAPTURE,
      method: STORAGE_METHODS.EDIT_ITEM
    }
  })


export const removeScreenshot = (criteria) =>
  ({
    type: ACTIONS.CALL_STORAGE,
    payload: { criteria },
    meta: {
      actions: {
        success: ACTIONS.FETCH_SCREENSHOT_SUCCEDED,
        fail: ACTIONS.FETCH_SCREENSHOT_FAILED
      },
      storage: STORAGE.SCREEN_CAPTURE,
      method: STORAGE_METHODS.REMOVE_ITEM
    }
  })


export const fetchTrelloBoards = () =>
  ({
    type: ACTIONS.CALL_API,
    meta: {
      actions: {
        success: ACTIONS.FETCH_TRELLO_BOARDS_SUCCEDED,
        fail: ACTIONS.FETCH_TRELLO_BOARDS_FAILED
      },
      endpoint: ENDPOINT.TRELLO.BOARDS,
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })


export const fetchTrelloBoardMembers = (param) =>
  ({
    type: ACTIONS.CALL_API,
    meta: {
      actions: {
        success: ACTIONS.FETCH_TRELLO_MEMBER_SUCCEDED,
        fail: ACTIONS.FETCH_TRELLO_MEMBER_FAILED
      },
      endpoint: ENDPOINT.TRELLO.MEMBERS.replace(/:param/gi, param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })


export const fetchTrelloBoardLists = (param) =>
  ({
    type: ACTIONS.CALL_API,
    meta: {
      actions: {
        success: ACTIONS.FETCH_TRELLO_LISTS_SUCCEDED,
        fail: ACTIONS.FETCH_TRELLO_LISTS_FAILED
      },
      endpoint: ENDPOINT.TRELLO.LISTS.replace(/:param/gi, param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })


export const fetchTrelloBoardLabels = (param) =>
  ({
    type: ACTIONS.CALL_API,
    meta: {
      actions: {
        success: ACTIONS.FETCH_TRELLO_LABELS_SUCCEDED,
        fail: ACTIONS.FETCH_TRELLO_LABELS_FAILED
      },
      endpoint: ENDPOINT.TRELLO.LABELS.replace(/:param/gi, param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })


export const createTrelloCard = (payload) =>
  ({
    type: ACTIONS.CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_TRELLO_CARD_INIT,
        success: ACTIONS.CREATE_TRELLO_CARD_SUCCEDED,
        fail: ACTIONS.CREATE_TRELLO_CARD_FAILED
      },
      endpoint: ENDPOINT.TRELLO.CREATE_CARD,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })
