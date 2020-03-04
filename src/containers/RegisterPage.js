import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'
import { removeMessages, register } from '../actions'

import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import TextMuted from '../components/TextMuted'
import RegisterForm from '../components/RegisterForm'
import Alert from '../components/Alert'


class Register extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.removeMessages()
  }

  onSubmitForm = values => {
    this.props.register(values)
  }

  render() {
    const { error, currentUser } = this.props
    if (currentUser){
      return <Redirect to={ROUTING.OPTIONS_PAGE} />
    }else {
      return (
        <>
          <Navbar></Navbar>
          <Container fullWidth={false} mt={300}>
            <Row>
              <Col xl={6} lg={7} md={8} sm={12}>
                { error && <Alert.Error object={error} /> }
                <Card bg="secondary">
                  <Card.Header>
                    <Card.Title text="Tell us about yourself" />
                  </Card.Header>
                  <Card.Body px={5} py={5}>
                    <RegisterForm onSubmit={this.onSubmitForm} />
                  </Card.Body>
                </Card>
                <Row pt={2}>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <NavLink to={ROUTING.FORGOT_PASSWORD_PAGE}>
                      <TextMuted align="left" text="Forgot password?" />
                    </NavLink>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <NavLink to={ROUTING.LOGIN_PAGE}>
                      <TextMuted align="right" text="Already have an account?"/>
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


const mapDispatchToProps = (dispatch) => bindActionCreators({ removeMessages, register }, dispatch)
const mapStateToProps = state => state.auth

export default connect(mapStateToProps, mapDispatchToProps)(Register)
