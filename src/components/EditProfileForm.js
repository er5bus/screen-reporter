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
        name="email"
        type="text"
        icon="ni-email-83"  
        placeholder="What's your work email?"
        defaultValue={initData && initData.email}
        validate={[rules.required, rules.email]} 
      />
      <TextField 
        name="fullname"
        type="text"
        icon="ni-circle-08"
        placeholder="Full name" 
        defaultValue={ initData && initData.fullname }
        validate={rules.required} 
      />
      <TextField
        name="password"
        type="password"
        icon="ni-lock-circle-open"
        placeholder="Pick a password to change the old one"
        validate={[rules.minLength(4)]}
      />
      <TextField 
        name="current_password"
        type="password" 
        icon="ni-lock-circle-open" 
        placeholder="Current Password" 
        validate={[rules.required, rules.minLength(4)]} 
      />
      <TextAlign mt={4}>
        <Button type="submit" style="info" text="Update account" />
      </TextAlign>
    </Form>
  )
}
