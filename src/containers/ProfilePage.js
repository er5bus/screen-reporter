import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'
import { removeMessages, editProfile, logout } from '../actions'

import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import TextMuted from '../components/TextMuted'
import EditProfileForm from '../components/EditProfileForm'
import LogoutModal from '../components/LogoutModal'
import Alert from '../components/Alert'


class EditProfilePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showLogoutModal: false
    }
  }

  componentDidMount() {
    this.props.removeMessages()
  }

  onSubmitForm = values => {
    this.props.editProfile(values, this.props.currentUser.id)
  }

  onToggelLogoutModal = () => {
    this.setState({ showLogoutModal: !this.state.showLogoutModal })
  }

  render() {
    const { error, success, currentUser } = this.props
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
          <Container fullWidth={false} mt={300}>
            { showLogoutModal && <LogoutModal show={showLogoutModal} onClose={this.onToggelLogoutModal} onLogout={this.props.logout} /> }
            <Row>
              <Col xl={6} lg={7} md={8} sm={12}>
                { error && <Alert.Error object={error} /> }
                { success && <Alert.Success object={success} /> }
                <Card bg="secondary">
                  <Card.Header>
                    <Card.Title text="Update Your informations" />
                  </Card.Header>
                  <Card.Body px={5} py={5}>
                    <EditProfileForm onSubmit={this.onSubmitForm} initData={currentUser} />
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


const mapDispatchToProps = (dispatch) => bindActionCreators({ removeMessages, editProfile, logout }, dispatch)
const mapStateToProps = state => state.auth

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage)
