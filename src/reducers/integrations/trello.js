import { ACTIONS } from '../../constants'


const trelloReducer = (state = { boards: [], lists: [], labels: [], members: [], initCardCreation: false , success: null, error:null }, action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.FETCH_TRELLO_BOARDS_INIT : {
      return { ...state, boards: [], lists: [], labels: [], members: [], initCardCreation: false, error: null, success: null  }
    }
    case ACTIONS.FETCH_TRELLO_BOARDS_SUCCEDED : {
      return { ...state, boards: payload.items, error: null }
    }
    case ACTIONS.FETCH_TRELLO_BOARDS_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.FETCH_TRELLO_LISTS_SUCCEDED : {
      return { ...state, lists: payload.items, error: null }
    }
    case ACTIONS.FETCH_TRELLO_LISTS_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.FETCH_TRELLO_LABELS_SUCCEDED : {
      return { ...state, labels: payload.items, error: null }
    }
    case ACTIONS.FETCH_TRELLO_LABELS_FAILED : {
      return { ...state, error: payload }
    }
      
    case ACTIONS.FETCH_TRELLO_MEMBER_SUCCEDED : {
      return { ...state, members: payload.items, error: null }
    }
    case ACTIONS.FETCH_TRELLO_MEMBER_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.CREATE_TRELLO_CARD_INIT: {
      return { ...state, initCardCreation: true, success: null, error: null }
    }
    case ACTIONS.CREATE_TRELLO_CARD_SUCCEDED : {
      return { ...state, success: payload }
    }
    case ACTIONS.CREATE_TRELLO_CARD_FAILED : {
      return { ...state, error: payload }
    }
    
    case ACTIONS.REMOVE_MESSAGES : {
      return { ...state, initCardCreation: false, error: null, success: null }
    }

    default: {
      return state
    }
  }
}

export default trelloReducer
