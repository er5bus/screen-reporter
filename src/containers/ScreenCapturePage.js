import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'

import Annotate from '../utils/imageAnnotate'

import { fetchScreenshot, editScreenshot, editSettings } from '../actions'

import ColorPicker from '../components/ColorPicker'
import Container from '../components/Container'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import Modal from '../components/Modal'


class ScreenCaptureEditor extends React.Component {

  constructor(props){
    super(props)
    this.imageAnnotateRef = React.createRef()
    this.annotate = undefined
    this.state = { color: this.props.settings.color || "red" }
  }

  componentDidMount() {
    this.props.fetchScreenshot(this.props.match.params)
  }

  componentDidUpdate() {
    const { settings, screenshot } = this.props
    if (settings && screenshot && !this.annotate && this.imageAnnotateRef){
      this.annotate = new Annotate(this.imageAnnotateRef.current, { ...settings, ...{ images: [screenshot.imageURI] } })
    }
  }

  componentUnMount() {
    this.annotate = undefined
    this.imageAnnotateRef = undefined
  }

  onColorChange = (color) => {
    this.annotate.updateColor(color.hex)
    this.setState({ color: color.hex })
  }

  onDownloadScreenCapture = (e) => {
    this.annotate.exportImage({type: "image/jpeg", quality: 1}, (imageBase64) => {
      const a = document.createElement("a")
      a.href = imageBase64
      a.download = `${this.props.screenshot.uuid}.jpeg`
      a.target = '_blank'
      a.click()
    })
  }

  onContinue = (e) => {
    e.preventDefault()
    const { screenshot } = this.props
    this.annotate.exportImage({type: "image/jpeg", quality: 1}, (imageURI) =>
      this.props.editScreenshot({ ...screenshot, imageURI }, { uuid: screenshot.uuid })
    )
    this.props.history.push(ROUTING.TRELLO_PAGE)
  }

  render() {
    const { settings, currentUser, screenshot, error } = this.props
    if (!currentUser){
      return <Redirect to={ROUTING.LOGIN_PAGE} />
    }else {
      return (
        <>
          <Navbar>
            <Navbar.Item onClick={this.onDownloadScreenCapture} text="Download" />
            <Navbar.Item onClick={this.onContinue} text="Continue" />
          </Navbar>
          <Container>
            <Card overflow={true}>
              <Card.Header pb={3}>
                <div>
                  <ColorPicker label="Choose a color" onChange={ this.onColorChange } color={this.state.color} />
                </div>
              </Card.Header>
              <Card.Body>
                <div ref={this.imageAnnotateRef} />
              </Card.Body>
            </Card>
          </Container>
        </>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchScreenshot, editSettings, editScreenshot }, dispatch)
const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { settings } = state.settings
  const { screenshot, error } = state.screenshots
  return { currentUser, settings, screenshot, error }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenCaptureEditor)
