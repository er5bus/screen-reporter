import React from 'react'

import TextAlign from './TextAlign'


export default ({text, align='center', mb=0, mt=0}) =>
  <TextAlign align={align} mb={mb} mt={mt}>
    <small className="text-muted">{text}</small>
  </TextAlign>
