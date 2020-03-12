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
        maxLength={100}
      />
      <TextField 
        name="fullname"
        type="text"
        icon="ni-circle-08"
        placeholder="Full name" 
        validate={rules.required} 
        maxLength={100}
      />
      <TextField 
        name="password"
        type="password" 
        icon="ni-lock-circle-open" 
        placeholder="Pick a Password" 
        validate={[rules.required, rules.minLength(4)]}
        maxLength={100}
      />
      <TextAlign mt={4}>
        <Button type="submit" style="info" text="Create account" />
      </TextAlign>
    </Form>
  )
}
