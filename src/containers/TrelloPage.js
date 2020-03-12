import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING, PAGE } from '../constants'

import {
  openTab,
  removeMessages,
  fetchTrelloBoards,
  createTrelloCard,
  fetchTrelloBoardLists,
  fetchTrelloBoardMembers,
  fetchTrelloBoardLabels
} from '../actions'

import Button from '../components/Button'
import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import TextAlign from '../components/TextAlign'
import TextMuted from '../components/TextMuted'
import TrelloForm from '../components/TrelloForm'
import Alert from '../components/Alert'
import Text from '../components/Text'


class TrelloPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { integrations } = this.props
    if (integrations.length){
      this.props.fetchTrelloBoards()
    }
  }

  onBoardChange = (value) => {
    this.props.fetchTrelloBoardLists(value)
    this.props.fetchTrelloBoardMembers(value)
    this.props.fetchTrelloBoardLabels(value)
  }

  onCreateTrelloCard = (values) => {
    this.props.createTrelloCard({...values, attachment: this.props.annotatedScreenshot.imageURI })
    this.props.history.push(ROUTING.POST_PAGE)
  }

  render () {
    const { integrations, currentUser, annotatedScreenshot, trello } = this.props
    if (!annotatedScreenshot){
      return <Redirect to={ROUTING.OPTIONS_PAGE} />
    }else {
      return (
        <>
          <Navbar>
            <Navbar.Link to={ROUTING.OPTIONS_PAGE} text="My Integrations" />
            <Navbar.Link to={ROUTING.SCREEN_CAPTURE_EDITOR.PATH.replace(/:uuid/gi, annotatedScreenshot.uuid)} text="Go Back to Previous Page" />
          </Navbar>
          <Container fullWidth={false}  mt={!integrations.length ? 200 : 400}>
            <Row>
              <Col xl={8} lg={8} md={8} sm={12} >
                { trello.error && <Alert.Error object={trello.error} /> }
                { !integrations.length  || !currentUser
                  ? (<Card bg="secondary">
                    <Card.Header>
                      <Card.Title text={!integrations.length ? "No trello account available" : "Post it on Trello"} />
                    </Card.Header>
                    <Card.Body px={5} py={5}>
                      <Text object={{"Info " : "In order to post this screen capture on trello you need to login then link your trello account"}} />
                      <TextAlign align="center">
                        <NavLink to={ROUTING.OPTIONS_PAGE}>
                          Login then Link Your Trello account
                        </NavLink>
                      </TextAlign>
                    </Card.Body>
                  </Card>)
                  : (<Card bg="secondary">
                    <Card.Header>
                      <Card.Title text="Post it on Trello" />
                    </Card.Header>
                    <Card.Body px={5} py={5}>
                      <TrelloForm
                        onSubmit={this.onCreateTrelloCard}
                        boards={trello.boards}
                        onChangeBoard={this.onBoardChange}
                        lists={trello.lists}
                        labels={trello.labels}
                        members={trello.members}
                      />
                    </Card.Body>
                  </Card>)
                }
              </Col>
            </Row>
          </Container>
        </>
      )
    }
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
  openTab,
  removeMessages,
  fetchTrelloBoardLabels,
  fetchTrelloBoards,
  fetchTrelloBoardLists,
  fetchTrelloBoardMembers,
  createTrelloCard
}, dispatch)

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { integrationsList: { integrations }, trello } = state.integrations
  const { screenshot: annotatedScreenshot } = state.screenshots

  return { currentUser, integrations, trello, annotatedScreenshot }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrelloPage)
