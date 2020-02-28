import React from 'react'

import rules from '../utils/validation'


import InputText from './InputText'
import InputSelect from './InputSelect'
import InputTextarea from './InputTextarea'
import TextAlign from './TextAlign'
import Button from './Button'
import Form from './Form'

import Field from '../hocomponents/Field'

const TextField = Field(InputText)
const TextareaField = Field(InputTextarea)
const SelectField = Field(InputSelect)

export default ({ onSubmit=f=>f, onChangeBoard=f=>f, boards, lists, members, labels }) => {
  return (
    <Form onSubmit={onSubmit}>
      <SelectField 
        name="board"
        placeholder="Select Board" 
        label="Board"
        onChange={onChangeBoard}
        options={boards}
        validate={[rules.required]} 
      />
      <TextField 
        name="description"
        type="text"
        placeholder="Explain your feedback" 
        validate={rules.required} 
      />
      <TextareaField 
        name="name"
        type="text"
        placeholder="Descriptions (steps to reproduce)" 
        validate={[rules.required]} 
      />
      <SelectField 
        name="list"
        label="List *"
        options={lists}
        placeholder="Select List" 
        validate={[rules.required]} 
      />
      <SelectField
        name="labels[]"
        type="text"
        label="Label"
        isMulti
        options={labels}
        placeholder="Select Label"
      />
      <SelectField 
        name="members[]"
        type="text"
        label="Members"
        options={members}
        isMulti
        placeholder="Select Members" 
      />
      <TextAlign mt={4}>
        <Button type="submit" style="info" text="Create card" />
      </TextAlign>
    </Form>
  )
}
