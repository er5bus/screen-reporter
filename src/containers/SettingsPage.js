import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'

import { editSettings, addIntegration, fetchIntegrations, fetchSettings, removeIntegration, editIntegration, logout } from '../actions'


import Button from '../components/Button'
import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import TextMuted from '../components/TextMuted'
import SettingsForm from '../components/SettingsForm'
import Alert from '../components/Alert'
import TrelloButton from '../components/TrelloButton'
import IntegrationList from '../components/IntegrationList'


class SettingsPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSettings()
    this.props.fetchIntegrations()
  }

  onSubmit = (object) => {
    this.props.editSettings(object)
  }

  onAuthSuccess = (apiKey) => {
    this.props.addIntegration({
      provider: "Trello",
      api_key: apiKey
    })
  }

  onAuthFailure = () => {
    this.props.integrationError = { message: "Error authentication" }
  }

  onRemoveIntegration = (id) => {
    this.props.removeIntegration(id)
  }

  onActivateIntegration = (integration, id) => {
    this.props.editIntegration(integration, id)
  }

  render() {
    const { settingsError, integrationError, currentUser, settings, integrations } = this.props
    if (!currentUser){
      return <Redirect to={ROUTING.LOGIN_PAGE} />
    }else {
      return (
        <>
          <Navbar>
            <Navbar.Dropdown text={currentUser.fullname}>
              <Navbar.DropdownLinkItem to={ROUTING.PROFILE_PAGE} text="Profile" />
              <Navbar.DropdownLinkItem to={ROUTING.OPTIONS_PAGE} text="Settings" />
              <Navbar.DropdownItem onClick={this.props.logout} text="Logout" />
            </Navbar.Dropdown>
          </Navbar>
          <Container fullWidth={false}  mt={400}>
            <Row>
              <Col xl={8} lg={8} md={8} sm={12} >
                { settingsError && <Alert message={settingsError} /> }
                { integrationError && <Alert message={integrationError} /> }
                <Card bg="secondary">
                  <Card.Header>
                    <Card.Title text="Settings" />
                  </Card.Header>
                  <Card.Body px={5} py={5}>
                    <TextMuted align="center" mb={3} text="Integrations is like a project, which lives inside your existing issue tracking or project management tool."/>
                    <TextAlign align="center" mb={5}>
                      <TrelloButton onAuthSuccess={this.onAuthSuccess} onAuthFailure={this.onAuthFailure} />
                    </TextAlign>
                    { integrations && <IntegrationList integrations={integrations} onActivate={this.onActivateIntegration} onRemove={this.onRemoveIntegration} /> }
                    <SettingsForm onSubmit={this.onSubmit} initData={settings} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editSettings,
  fetchSettings,
  fetchIntegrations,
  editIntegration,
  removeIntegration,
  addIntegration,
  logout
}, dispatch)

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { settings, error: settingsError } = state.settings
  const { integrationsList: { integrations, error: integrationError  }} = state.integrations
  return { currentUser, settings, settingsError, integrationError, integrations, integrationError }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
