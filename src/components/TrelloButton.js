import React from 'react'
import browser from '../utils/browserAPI'
import { TRELLO, PAGES } from '../constants'

import trello from '../assets/img/trello-icon.svg'

import ButtonIcon from './ButtonIcon'


export default ({ buttonText, onAuthSuccess=f=>f, onAuthFailure=f=>f }) => {

  let webAuthFlowisOpen = false

  const trelloQuery = (redirectUrl) =>
    ({
      expiration: TRELLO.EXPIRATION,
      scope: TRELLO.SCOPE,
      return_url: redirectUrl,
      response_type: TRELLO.RESPONSE_TYPE,
      callback_method: TRELLO.CALLBACK_METHOD,
      name: TRELLO.APP_NAME,
      key: TRELLO.TOKEN
    })

  const authorize = () => {
    if (!webAuthFlowisOpen) {
      webAuthFlowisOpen = true
      const redirectUrl = browser.identity.getRedirectURL();
      browser.identity.launchWebAuthFlow(
        TRELLO.AUTH_URL,
        trelloQuery(redirectUrl),
        (urlParams) => {
          onAuthSuccess(urlParams.get(TRELLO.RESPONSE_TYPE)),
          webAuthFlowisOpen = false
        },
        (args) => {
          onAuthFailure(args)
          webAuthFlowisOpen = false
        }
      )
    }
  }

  return (
    <ButtonIcon icon={trello} onClick={authorize} text="Link your trello account" />
  )
}
