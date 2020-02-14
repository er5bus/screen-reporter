import browser from './browserAPI'
import { ScreenCapture } from './models'
import { PAGES, SCREEN_CAPTRUE_STORAGE_KEY } from './constants'


// Listen for a click on the camera icon.
browser.browserAction.onClick(() => {
  browser.tab.captureCurrentScreen( imageURI => {
    const screenCapture = new ScreenCapture({imageURI})
    browser.storage.addItem(
      SCREEN_CAPTRUE_STORAGE_KEY,
      screenCapture.toJson(),
      (success) => browser.tab.redirectToPage(PAGES.RECEIVER.PATH, { [PAGES.RECEIVER.PARAM_NAME]: screenCapture.uuid }),
      (err) => console.error(err)
    )
  })
})
