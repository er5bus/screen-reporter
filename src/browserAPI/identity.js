const chromeIdentity = ( function () {

  const browser = chrome.identity

  function generateUrl (page, query = []) {
    return `${page}?${arrayToURL(query)}`
  }

  function arrayToURL (object) {
    let query = []
    Object.keys(object).forEach((key) => {
      query.push(`${key}=${encodeURIComponent(object[key])}`)
    })
    return query.join('&')
  }

  return {
    getRedirectURL : function (path = "") {
      return browser.getRedirectURL(path)
    },
    launchWebAuthFlow: function (page, query, onSuccess=f=>f, onError=f=>f) {
      const authUrl = generateUrl(page, query)
      browser.launchWebAuthFlow({url: authUrl, interactive: true},
        function(redirectUrl) {
          if (chrome.runtime.lastError) {
            onError(new Error(chrome.runtime.lastError));
            return;
          }
          const url = new URL(redirectUrl.replace('#', '?'))
          console.log(url)
          onSuccess.apply({authUrl, redirectUrl}, [url.searchParams])
        }
      );
    }
  }
}())


export default chromeIdentity
