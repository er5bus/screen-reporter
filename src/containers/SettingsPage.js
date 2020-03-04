import React from 'react'

import rules from '../utils/validation'

import InputText from '../components/InputText'
import TextAlign from '../components/TextAlign'
import Button from '../components/Button'
import Form from '../components/Form'
import Field from '../hocomponents/Field'
import ColorPicker from '../components/ColorPicker'
import Modal from '../components/Modal'
import Alert from '../components/Alert'


const TextField = Field(InputText)

export default class SettingsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {color: props.initData.color}
  }

  onColorChange = (color) => {
    this.setState({color: color.hex})
  }

  render () {
    const { onSubmit, error, success, onClose, initData = {} } = this.props
    return (
      <Modal title="Settings" onClose={onClose}>
        <Form onSubmit={(values) => onSubmit({...values, color: this.state.color})}>
          <Modal.Body>
            { error && <Alert.Error object={error} /> }
            <TextField
              name="fontsize"
              type="text"
              icon="ni-caps-small"
              placeholder="Font size"
              defaultValue={initData && initData.fontsize}
              validate={[rules.required, rules.minLength(1), rules.maxLength(5)]}
            />
            <TextField
              name="linewidth"
              type="text"
              icon="ni-vector"
              placeholder="Line width"
              defaultValue={initData && initData.linewidth}
              validate={[rules.required, rules.digits, rules.min(4), rules.max(40)]}
            />
            <ColorPicker label="Choose a color" onChange={ this.onColorChange } color={this.state.color} />
          </Modal.Body>
          <Modal.Footer>
            <Button text="Save settings" style="info" type="submit" />
            <Button onClick={onClose} text="Close" style="primary" type="button" />
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}
