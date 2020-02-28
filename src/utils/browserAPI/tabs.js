const chromeTabs = ( function () {

  const browser = chrome.tabs
  const extension = chrome.extension

  return {
    captureCurrentScreen : function (callback) {
      browser.captureVisibleTab(callback)
    },
    redirectToPage: function (page, route, callback=f=>f) {
      const url = `${page}#${route}`
      browser.create({url}, callback)
    }
  }
}())


export default chromeTabs
