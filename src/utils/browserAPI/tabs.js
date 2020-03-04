import cameraClick from '../../assets/audio/camera-click.mp3'


const chromeTabs = ( function () {

  const tabs = chrome.tabs
  const extension = chrome.extension

  const sound = new Audio(cameraClick)

  return {
    captureCurrentScreen : function (callback) {
      sound.play()
      tabs.captureVisibleTab(callback)
    },
    redirectToPage: function (page, route, callback=f=>f) {
      const url = `${page}#${route}`
      tabs.create({url}, callback)
    }
  }
}())


export default chromeTabs
