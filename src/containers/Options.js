import React from 'react'
import browser from '../browserAPI'
import { Settings } from '../models'
import { SETTINGS_STORAGE_KEY } from '../constants'

import Button from '../components/Button'
import TrelloButton from '../components/TrelloButton'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import NavbarItem from '../components/NavbarItem'
import Loader from '../components/Loader'
import Card from '../components/Card'
import TextCenter from '../components/TextCenter'
import TextMuted from '../components/TextMuted'
import InputText from '../components/InputText'


class App extends React.Component {

  constructor(props) {
    super(props)

    this.emailField = React.createRef()
    this.fullnameField = React.createRef()
    this.trelloApiTokenField = React.createRef()
  }

  componentDidMount () {
    browser.storage.getItem(SETTINGS_STORAGE_KEY, null)
      .then((item) => {
        if (!item){
          return;
        }
        const settings = new Settings(item)
        this.emailField.current.value = settings.email
        this.fullnameField.current.value = settings.fullname
        this.trelloApiTokenField.current.value = settings.apiToken
      })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const settings = new Settings({ 
      email: this.emailField.current.value, 
      fullname: this.fullnameField.current.value, 
      apiToken: this.trelloApiTokenField.current.value
    })

    browser.storage.setItem(SETTINGS_STORAGE_KEY, settings.toJson())
      .then((success) => console.log(success))
      .catch((err) => console.log(err))
  }

  onTrelloAuthSuccess = (token) => {
    console.log(token)
    this.trelloApiTokenField.current.value = token
  }

  onTrelloAuthFailure = (err) => {
    console.log(err)
    console.log(err)
  }

  render (){
    return (
      <>
        <Navbar></Navbar>
        <Container fullWidth={false}>
          <Card px={5} py={5}>
            <TextMuted mb={3} text="Sign in with trello to get the api token" />
            <TextCenter>
              <TrelloButton onAuthSuccess={this.onTrelloAuthSuccess} onAuthFailure={this.onTrelloAuthFailure} />
            </TextCenter>
            <TextMuted mt={3} mb={4} text="Tell us about yourself" />
            <form role="form" onSubmit={this.onFormSubmit}>
              <InputText ref={this.emailField} placeholder="What's your work email?" />
              <InputText ref={this.fullnameField} placeholder="Full name"/>
              <InputText ref={this.trelloApiTokenField} placeholder="Paste trello api token here"/>
              <TextCenter mt={5}>
                <Button type="info" text="Save" />
              </TextCenter>
            </form>
          </Card>
        </Container>
      </>
    )
  }
}


export default App
