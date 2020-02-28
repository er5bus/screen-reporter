import { ACTIONS } from '../../constants'


const trelloReducer = (state = { boards: [], lists: [], labels: [], members: [] , success: null, error:null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.FETCH_TRELLO_BOARDS_SUCCEDED : {
      return { ...state, boards: payload, error: null }
    }
    case ACTIONS.FETCH_TRELLO_BOARDS_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.FETCH_TRELLO_LISTS_SUCCEDED : {
      return { ...state, lists: payload, error: null }
    }
    case ACTIONS.FETCH_TRELLO_LISTS_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.FETCH_TRELLO_LABELS_SUCCEDED : {
      return { ...state, labels: payload, error: null }
    }
    case ACTIONS.FETCH_TRELLO_LABELS_FAILED : {
      return { ...state, error: payload }
    }
      
    case ACTIONS.FETCH_TRELLO_MEMBER_SUCCEDED : {
      return { ...state, members: payload, error: null }
    }
    case ACTIONS.FETCH_TRELLO_MEMBER_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.CREATE_TRELLO_CARD_INIT: {
      return { ...state, success: null, error: null }
    }
    case ACTIONS.CREATE_TRELLO_CARD_SUCCEDED : {
      return { ...state, success: payload }
    }
    case ACTIONS.CREATE_TRELLO_CARD_FAILED : {
      return { ...state, error: payload }
    }

    default: {
      return state
    }
  }
}

export default trelloReducer
