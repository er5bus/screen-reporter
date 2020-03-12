import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FadeIn from 'react-fade-in'

import { ROUTING } from '../constants'

import { removeScreenshot, logout, removeMessages } from '../actions'

import success from '../assets/img/success.png'
import error from '../assets/img/error.png'

import Button from '../components/Button'
import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import Text from '../components/Text'
import TrelloForm from '../components/TrelloForm'
import Wait from '../components/Wait'
import LogoutModal from '../components/LogoutModal'


class PostPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showLogoutModal: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { annotatedScreenshot=null, trello: { success } } = this.props
    if (success && annotatedScreenshot){
      this.props.removeScreenshot({ uuid: annotatedScreenshot.uuid })
    }
  }

  onToggelLogoutModal = () => {
    this.setState({ showLogoutModal: !this.state.showLogoutModal })
  }

  render () {
    const { trello, currentUser } = this.props
    const { showLogoutModal } = this.state
    if (!trello.initCardCreation || !currentUser){
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
                <Card bg="secondary">
                  <Card.Header>
                    <Card.Title text="Post it on Trello" />
                  </Card.Header>
                  <Card.Body px={5} py={5}>
                    <FadeIn>
                      { trello.success &&
                      <>
                        <Text object={trello.success} />
                        <TextAlign align="center" mt={0}><img src={success} /></TextAlign>
                      </>
                      }
                      { trello.error &&
                        <>
                          <Text object={trello.error} />
                          <TextAlign align="center" mt={0}><img src={error} /></TextAlign>
                        </>
                      }
                      { !(trello.error || trello.success) &&
                        <>
                          <Text object={{"Please wait" : "Your card is about to be created"}} />
                          <TextAlign align="center" mt={5}><Wait /></TextAlign>
                        </>
                      }
                    </FadeIn>
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


const mapDispatchToProps = (dispatch) => bindActionCreators({ removeScreenshot, logout, removeMessages }, dispatch)

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { trello } = state.integrations
  const { screenshot: annotatedScreenshot } = state.screenshots

  return { currentUser, trello, annotatedScreenshot }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
