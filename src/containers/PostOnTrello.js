import React from 'react'
import Trello from 'trello'
import browser from '../browserAPI'
import { Settings } from '../models'
import { TRELLO, SETTINGS_STORAGE_KEY } from '../constants'

import Modal from '../components/Modal'
import Select from 'react-select'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      boards: null
    }
  }

  componentDidMount() {
    const { settings } = this.props
    console.log(settings)
    this.trello = new Trello(TRELLO.TOKEN, settings.apiToken)
    console.log(this.trello.getBoards())
    this.setState({
      boards: this.trello.getBoards()
    })
  }

  onBoardChange = (value) => {
    console.log(value)
  }

  render () {
    const { settings } = this.props
    const { boards } = this.state
    return (
      <Modal>
        <Select cacheOptions
          loadOptions={boards}
          defaultOptions
          onInputChange={this.onBoardChange} />
      </Modal>
    )
  }
}

export default App
