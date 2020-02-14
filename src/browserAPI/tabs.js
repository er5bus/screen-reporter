const chromeTabs = ( function () {

  const browser = chrome.tabs
  const extension = chrome.extension

  function generateTabUrl (page, query = []) {
    return extension.getURL(`${page}?${arrayToURL(query)}`)
  }

  function arrayToURL (object) {
    let query = []
    Object.keys(object).forEach((key) => {
      query.push(`${key}=${object[key]}`)
    })
    return query.join('&')
  }

  return {
    captureCurrentScreen : function (callback) {
      browser.captureVisibleTab(callback)
    },
    redirectToPage: function (page, query, callback=f=>f) {
      const url = generateTabUrl(page, query)
      browser.create({url}, callback)
    }
  }
}())


export default chromeTabs
