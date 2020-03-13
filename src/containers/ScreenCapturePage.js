import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Draggable from 'react-draggable'

import { ROUTING, CAPTURE_ANNOTATION_OPTIONS } from '../constants'

import Annotate from '../utils/imageAnnotate'

import { removeMessages, fetchScreenshot, editScreenshot, editSettings, editSettingsLocal } from '../actions'

import Container from '../components/Container'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import SettingsPage from './SettingsPage'
import TextAlign from '../components/TextAlign'
import ErrorPage from '../components/ErrorPage'


class ScreenCaptureEditor extends React.Component {

  constructor(props){
    super(props)
    this.imageAnnotateRef = React.createRef()
    this.annotate = undefined
    this.state = { showModal: false }
  }

  onUnload = e => { // the method that will be used for both add and remove event
    e.preventDefault();
    e.returnValue = '';
  }

  componentWillUnmount() {
    this.saveScreenCapture()
    this.annotate = undefined
    this.imageAnnotateRef = undefined
  }

  componentDidMount() {
    this.props.removeMessages()
    this.props.fetchScreenshot(this.props.match.params)
  }

  componentDidUpdate(prevProps, prevState) {

    const { settingsSuccess, settingsError } = prevProps
    if (settingsSuccess || settingsError) {
      this.props.removeMessages()
    }

    const { settings, screenshot, screenshotError, settingsSuccess: success } = this.props
    if (settings && screenshot && !this.annotate && this.imageAnnotateRef && !screenshotError){
      this.annotate = new Annotate(this.imageAnnotateRef.current, { ...settings, ...{ images: [screenshot.imageURI] }, tools: "#js-tools-menu" })
    }
    if (this.annotate && success) {
      this.annotate.updateOptions(settings)
      this.setState({ showModal: false })
    }
  }

  onEditSettings = (values) => {
    const { currentUser} = this.props
    if (currentUser){
      this.props.editSettings(values)
    }else {
      this.props.editSettingsLocal(values)
    }
  }

  onShowSettings = (e) => {
    this.setState({ showModal: !this.state.showModal })
  }

  onDownloadScreenCapture = (e) => {
    this.annotate.exportImage(CAPTURE_ANNOTATION_OPTIONS, (imageBase64) => {
      const a = document.createElement("a")
      a.href = imageBase64
      a.download = `${this.props.screenshot.uuid}.jpeg`
      a.target = '_blank'
      a.click()
    })
  }

  saveScreenCapture = () => {
    const { screenshot } = this.props
    this.annotate.exportImage(CAPTURE_ANNOTATION_OPTIONS, (imageURI) =>
      this.props.editScreenshot({ ...screenshot, imageURI }, { uuid: screenshot.uuid })
    )
  }

  render() {
    const { settings, currentUser, screenshot, screenshotError, settingsError, settingsSuccess } = this.props
    const { showModal } = this.state
    if (screenshotError){
      return (<ErrorPage code={404} message="Looks like the screen capture you looking for is no longer here" />)
    }else {
      return (
        <>
          <Navbar>
            <Navbar.Item onClick={this.onShowSettings} text="Settings" />
            <Navbar.Item onClick={this.onDownloadScreenCapture} text="Download" />
            <Navbar.Link to={ROUTING.TRELLO_PAGE} text="Post on Trello" />
          </Navbar>
          <SettingsPage
            show={showModal}
            error={settingsError}
            onSubmit={this.onEditSettings}
            onClose={this.onShowSettings}
            initData={settings}
          />
          <Container mt={500}>
            <Card overflow={true}>
              <Card.Body>
                <div ref={this.imageAnnotateRef}>
                  <Draggable bounds="parent" defaultPosition={{x: window.innerWidth / 2.5, y: 25}}>
                    <div className="group-annotate" id="js-tools-menu" />
                  </Draggable>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </>
      )

    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ removeMessages, fetchScreenshot, editSettings, editScreenshot, editSettingsLocal }, dispatch)
const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { settings, error: settingsError, success: settingsSuccess } = state.settings
  const { screenshot, error: screenshotError } = state.screenshots
  return { currentUser, settings, screenshot, settingsError, settingsSuccess, screenshotError }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenCaptureEditor)
