import React from 'react'

import rules from '../utils/validation'

import InputText from './InputText'
import TextAlign from './TextAlign'
import Button from './Button'
import Form from './Form'
import Field from '../hocomponents/Field'

const TextField = Field(InputText)

export default ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <TextField 
        name="email"
        type="text"
        icon="ni-email-83"  
        placeholder="What's your work email?" 
        validate={[rules.required, rules.email]} 
      />
      <TextAlign mt={4}>
        <Button type="submit" style="info" text="Reset password" />
      </TextAlign>
    </Form>
  )
}
