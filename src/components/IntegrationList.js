import React from 'react'

import IntegrationItem from '../components/IntegrationItem'
import List from '../components/List'

import trello from '../assets/img/trello-icon.svg'


export default ({ integrations, onRemove=f=>f, onActivate=f=>f }) => (
    <List>
      { integrations && integrations.map((integration, i) => (
        <List.Item key={i}>
          <IntegrationItem key={i} integration={integration} providerIcon={trello} onRemove={onRemove} onActivate={onActivate} />
        </List.Item>)
      ) }
    </List>
  )
