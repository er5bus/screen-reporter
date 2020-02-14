


const chromeBrowserAction = ( function () {

  const browser = chrome.browserAction

  return {
    onClick: function (callback) {
      browser.onClicked.addListener(callback)
    }
  }
}())


export default chromeBrowserAction
