import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ROUTING } from '../constants'

import { removeScreenshot, fetchTrelloBoards, createTrelloCard, fetchTrelloBoardLists, fetchTrelloBoardMembers, fetchTrelloBoardLabels } from '../actions'

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


class TrelloPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTrelloBoards()
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
    const { integrations, annotatedScreenshot, trello } = this.props
    if (!integrations && annotatedScreenshot){
      return <Redirect to={ROUTING.LOGIN_PAGE} />
    }else {
      return (
        <>
          <Navbar>
            <Navbar.Link to={ROUTING.SCREEN_CAPTURE_EDITOR.PATH.replace(/:uuid/gi, annotatedScreenshot.uuid)} text="Go Back to Previous Page" />
          </Navbar>
          <Container fullWidth={false}  mt={400}>
            <Row>
              <Col xl={8} lg={8} md={8} sm={12} >
                { trello.error && <Alert message={trello.error} /> }
                <Card bg="secondary">
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
  removeScreenshot,
  fetchTrelloBoardLabels,
  fetchTrelloBoards,
  fetchTrelloBoardLists,
  fetchTrelloBoardMembers,
  createTrelloCard
}, dispatch)

const mapStateToProps = state => {
  console.log(state.integrations)
  const { currentUser } = state.auth
  const { integrationsList: { integrations }, trello } = state.integrations
  const { screenshot: annotatedScreenshot } = state.screenshots

  return { currentUser, integrations, trello, annotatedScreenshot }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrelloPage)
