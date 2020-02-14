import React from 'react'
import Trello from 'trello'
import Annotate from '../imageAnnotate'
import browser from '../browserAPI'
import { ScreenCapture, Settings } from '../models'
import { PAGES, TRELLO_APP_TOKEN, SCREEN_CAPTRUE_STORAGE_KEY, SETTINGS_STORAGE_KEY } from '../constants'

import Error from '../components/Error'
import Container from '../components/Container'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import NavbarItem from '../components/NavbarItem'
import Loader from '../components/Loader'
import Modal from '../components/Modal'

import PostScreenCapture from './PostScreenCapture'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      screenCapture: null,
      error: false,
      postItOn: {
        show: false,
        providers: {
          trello: false
        }
      }
    }
  }

  onSuccess = (objects) => {
    const screenCapture = new ScreenCapture(objects[0])
    this.setState({screenCapture: screenCapture, isLoading: false})
    this.annotate = new Annotate('#js-image-annotate', {
      images: [screenCapture.imageURI],
      color: 'blue',
      type: 'unselect',
      linewidth: 2,
      fontsize: '20px',
      bootstrap: true,
      position: 'top',
      idAttribute: 'id',
      selectEvent: 'change',
      unselectTool: true,
      onExport: function(imageBase64) {
        const a = document.createElement("a")
        a.href = imageBase64
        a.download = `${screenCapture.uuid}.jpeg`
        a.click()
      }
    })
  }

  onError = (err) => {
    this.setState({error: err, isLoading: false})
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    const value = urlParams.get(PAGES.RECEIVER.PARAM_NAME)

    browser.storage.searchForItem(
      SCREEN_CAPTRUE_STORAGE_KEY,
      browser.storage.createCriteria('uuid', browser.storage.criteria.EQ, value),
      this.onSuccess,
      this.onError
    )
  }

  onDownloadScreenCapture = (e) => {
    this.annotate.exportImage({type: "image/jpeg", quality: 1})
  }

  onRedirectToOptionsPage = (e) => {
    browser.tab.redirectToPage(PAGES.OPTIONS.PATH)
  }

  onPostOnTrello = (e) => {
    e.preventDefault()
    this.setState({postItOn: {show: true, providers: {trello: true}}})
  }

  render() {
    const { screenCapture, isLoading, error, postItOn } = this.state
    if (isLoading) {
      return <Loader />
    }
    if (screenCapture) {
      return (
        <>
          <Navbar>
            <NavbarItem onClick={this.onPostOnTrello} title="Post it on Trello" />
            <NavbarItem onClick={this.onDownloadScreenCapture} title="Download" />
            <NavbarItem onClick={this.onRedirectToOptionsPage} title="Options" />
          </Navbar>
          <Container>
            <Card>
              <div id="js-annotate-section">
                <div id="js-image-annotate"></div>
              </div>
            </Card>
          </Container>
          { postItOn.show && <PostScreenCapture providers={postItOn.providers} /> }
        </>
      )
    }else {
      return <Error message={error.message}/>
    }
  }
}


export default App
