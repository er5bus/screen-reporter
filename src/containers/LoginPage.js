import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'

import { removeMessages, login } from '../actions'

import Button from '../components/Button'
import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import TextMuted from '../components/TextMuted'
import LoginForm from '../components/LoginForm'
import Alert from '../components/Alert'


class LoginPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.removeMessages()
  }

  onSubmit = (object) => {
    this.props.login(object)
  }

  render() {
    const { error, success, currentUser } = this.props
    if (currentUser){
      return <Redirect to={ROUTING.OPTIONS_PAGE} />
    }else {
      return (
        <>
          <Navbar></Navbar>
          <Container fullWidth={false}  mt={300}>
            <Row>
              <Col xl={6} lg={7} md={8} sm={12} >
                { error && <Alert.Error object={error} /> }
                { success && <Alert.Success object={success} /> }
                <Card bg="secondary">
                  <Card.Header>
                    <Card.Title text="Log in" />
                  </Card.Header>
                  <Card.Body px={5} py={5}>
                    <LoginForm onSubmit={this.onSubmit} />
                  </Card.Body>
                </Card>
                <Row pt={2}>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <NavLink to={ROUTING.FORGOT_PASSWORD_PAGE}>
                      <TextMuted align="left" text="Forgot password?" />
                    </NavLink>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <NavLink to={ROUTING.REGISTER_PAGE}>
                      <TextMuted align="right" text="Create new account" />
                    </NavLink>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ removeMessages, login }, dispatch)
const mapStateToProps = state => state.auth

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
