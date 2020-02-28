import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'
import { resetPassword } from '../actions'

import Button from '../components/Button'
import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import TextMuted from '../components/TextMuted'
import Alert from '../components/Alert'
import ResetPasswordForm from '../components/ResetPasswordForm'


class ForgotPassword extends React.Component {

  constructor(props) {
    super(props)
  }

  onFormSubmit = (values) => {
    this.props.resetPassword(values.email)
  }

  render() {
    const { error, currentUser, success } = this.props
    if (currentUser){
      return <Redirect to={ROUTING.OPTIONS_PAGE} />
    }else {
      return (
        <>
          <Navbar></Navbar>
          <Container fullWidth={false} mt={300}>
            <Row>
              <Col xl={6} lg={7} md={8} sm={12} >
                { error && <Alert message={error} /> }
                { success && <Alert type="success" message={success} /> }
                <Card bg="secondary">
                  <Card.Header>
                    <Card.Title text="Recover Your Password" />
                  </Card.Header>
                  <Card.Body px={5} py={5}>
                    <ResetPasswordForm onSubmit={this.onFormSubmit} />
                  </Card.Body>
                </Card>
                <Row pt={2}>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <NavLink to={ROUTING.REGISTER_PAGE}>
                      <TextMuted align="left" text="You don't have an account yet?" />
                    </NavLink>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <NavLink to={ROUTING.LOGIN_PAGE}>
                      <TextMuted align="right" text="Already have an account?" />
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


const mapDispatchToProps = (dispatch) => bindActionCreators({ resetPassword }, dispatch)
const mapStateToProps = state => state.auth

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
