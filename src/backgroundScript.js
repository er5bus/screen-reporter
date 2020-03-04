import { v4 as uuidv4 } from 'uuid'

import browser from './utils/browserAPI'
import { PAGE, ROUTING, STORAGE } from './constants'

// Listen for a click on the camera icon.
browser.browserAction.onClick(() => {
  browser.tab.captureCurrentScreen( imageURI => {
    
    const screenCapture = {
      imageURI,
      uuid: uuidv4()
    }

    browser.storage.addItem(
      STORAGE.SCREEN_CAPTURE,
      screenCapture,
      (success) => browser.tab.redirectToPage(PAGE, ROUTING.SCREEN_CAPTURE_EDITOR.PATH.replace(ROUTING.SCREEN_CAPTURE_EDITOR.PARAM, screenCapture.uuid)),
      (err) => console.error(err)
    )
  })
})
