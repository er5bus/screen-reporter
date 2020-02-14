import React from 'react'
import browser from '../browserAPI'
import { Settings } from '../models'
import { SETTINGS_STORAGE_KEY } from '../constants'

import PostOnTrello from './PostOnTrello'
import Error from '../components/Error'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      settings: null,
      error: null
    }
  }

  componentDidMount() {
    browser.storage.getItem(SETTINGS_STORAGE_KEY, null)
      .then(this.onSuccess)
      .catch(this.onError)

  }
  
  onSuccess = (object) => {
    const settings = new Settings(object)
    this.setState({settings})
  }

  onError = (err) => {
    this.setState({error: err})
  }

  render () {
    const { providers=null } = this.props
    const { settings, error } = this.state
    
    if (settings && providers  && providers.trello){
      return <PostOnTrello settings={settings} />
    }
    if (error) {
      return <Error error={error} />     
    }

    return <></>
  }
}

export default App
