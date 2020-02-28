import React from 'react'

import rules from '../utils/validation'

import InputText from './InputText'
import TextAlign from './TextAlign'
import Button from './Button'
import Form from './Form'
import Field from '../hocomponents/Field'


export default ({ onSubmit }) => {
  const TextField = Field(InputText)
  return (
    <Form onSubmit={onSubmit}>
      <TextField 
        name="email"
        type="text"
        icon="ni-email-83"  
        placeholder="What's your work email?" 
        validate={[rules.required, rules.email]} 
      />
      <TextField 
        name="password"
        type="password" 
        icon="ni-lock-circle-open" 
        placeholder="Pick a Password" 
        validate={[rules.required, rules.minLength(4)]} 
      />
      <TextAlign mt={4}>
        <Button type="submit" style="info" text="Login" />
      </TextAlign>
    </Form>
  )
}
