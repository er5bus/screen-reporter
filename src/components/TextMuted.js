import React from 'react'

import TextCenter from './TextCenter'


export default ({text, mb=0, mt=0}) =>
  <TextCenter mb={mb} mt={mt}>
    <small className="text-muted">{text}</small>
  </TextCenter>
