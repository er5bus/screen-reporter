import React from 'react'

import rules from '../utils/validation'

import InputText from './InputText'
import TextAlign from './TextAlign'
import Button from './Button'
import Form from './Form'
import Field from '../hocomponents/Field'

const TextField = Field(InputText)

export default ({ onSubmit, initData = {} }) => {
  return (
    <Form onSubmit={onSubmit}>
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
      <TextAlign mt={4}>
        <Button type="submit" style="info" text="Save" />
      </TextAlign>
    </Form>
  )
}
