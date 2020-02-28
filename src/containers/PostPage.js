import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'

import { removeScreenshot } from '../actions'

import Button from '../components/Button'
import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import Text from '../components/Text'
import TrelloForm from '../components/TrelloForm'


class PostPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentUnMount() {
    const { annotatedScreenshot: { uuid } } = this.props
    this.props.removeScreenshot({ uuid })
  }

  render () {
    const { annotatedScreenshot, trello } = this.props
    if (!annotatedScreenshot){
      return <Redirect to={ROUTING.LOGIN_PAGE} />
    }else {
      return (
        <>
          <Navbar>
          </Navbar>
          <Container fullWidth={false}  mt={200}>
            <Row>
              <Col xl={8} lg={8} md={8} sm={12} >
                <Card bg="secondary">
                  <Card.Header>
                    <Card.Title text="Post it on Trello" />
                  </Card.Header>
                  <Card.Body px={5} py={5}>
                    { console.log(trello.success) }
                    { trello.success && (<Text object={trello.success} />) }
                    { trello.error && (<Text object={trello.error} />) }
                    { !(trello.error || trello.success) && <Text object={{"Please wait" : "Your card is about to be created"}} /> }
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


const mapDispatchToProps = (dispatch) => bindActionCreators({ removeScreenshot }, dispatch)

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { trello } = state.integrations
  const { screenshot: annotatedScreenshot } = state.screenshots

  return { currentUser, trello, annotatedScreenshot }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
