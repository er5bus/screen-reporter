import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'

import { removeMessages, editSettings, addIntegration, fetchIntegrations, fetchSettings, removeIntegration, editIntegration, logout } from '../actions'


import Button from '../components/Button'
import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import TextMuted from '../components/TextMuted'
import Alert from '../components/Alert'
import TrelloButton from '../components/TrelloButton'
import IntegrationList from '../components/IntegrationList'
import LogoutModal from '../components/LogoutModal'


class IntegrationPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showLogoutModal: false
    }
  }

  componentDidMount() {
    this.props.removeMessages()
    this.props.fetchIntegrations()
  }

  onAuthSuccess = (apiKey) => {
    this.props.addIntegration({
      provider: "Trello",
      api_key: apiKey
    })
  }

  onRemoveIntegration = (id) => {
    this.props.removeIntegration(id)
  }

  onActivateIntegration = (integration, id) => {
    this.props.editIntegration(integration, id)
  }

  onToggelLogoutModal = () => {
    this.setState({ showLogoutModal: !this.state.showLogoutModal })
  }

  render() {
    const { integrationError, annotatedScreenshot, integrationSuccess, currentUser, integrations } = this.props
    const { showLogoutModal } = this.state
    if (!currentUser){
      return <Redirect to={ROUTING.LOGIN_PAGE} />
    }else {
      return (
        <>
          <Navbar>
            <Navbar.Dropdown text={currentUser.fullname}>
              <Navbar.DropdownLinkItem to={ROUTING.PROFILE_PAGE} text="Profile" />
              <Navbar.DropdownLinkItem to={ROUTING.OPTIONS_PAGE} text="Integrations" />
              <Navbar.DropdownItem onClick={this.onToggelLogoutModal} text="Logout" />
            </Navbar.Dropdown>
          </Navbar>
          <Container fullWidth={false}  mt={300}>
            { showLogoutModal && <LogoutModal show={showLogoutModal} onClose={this.onToggelLogoutModal} onLogout={this.props.logout} /> }
            <Row>
              <Col xl={8} lg={8} md={8} sm={12} >
                { integrationError && <Alert.Error object={integrationError} /> }
                { integrationSuccess && <Alert.Success object={integrationSuccess} /> }
                { (integrations.length && annotatedScreenshot)
                  ? <div className="alert alert-info">
                    <NavLink className="alert-link" to={ROUTING.TRELLO_PAGE}>
                      Post current screenshot on trello
                    </NavLink>
                  </div>
                  : true
                }
                <Card bg="secondary">
                  <Card.Header>
                    <Card.Title text="Integrations" />
                  </Card.Header>
                  <Card.Body px={5} py={5}>
                    <TextMuted align="center" mb={2} text="Integrations is like a project, which lives inside your existing issue tracking or project management tool."/>
                    <TextMuted align="center" mb={1} text="Currently we only support trello."/>
                    <TextMuted align="center" mb={3} text="Link as many trello account as you need."/>
                    <TextAlign align="center" mb={5}>
                      <TrelloButton buttonText={integrations.length ? "Link Another trello account" : "Link Your trello account"} onAuthSuccess={this.onAuthSuccess} />
                    </TextAlign>
                    <IntegrationList integrations={integrations} onActivate={this.onActivateIntegration} onRemove={this.onRemoveIntegration} />
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
  logout,
  removeMessages
}, dispatch)

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { screenshot: annotatedScreenshot } = state.screenshots
  const { integrationsList: { integrations, success: integrationSuccess, error: integrationError  }} = state.integrations
  return { currentUser, annotatedScreenshot, integrations, integrationSuccess, integrationError }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntegrationPage)
