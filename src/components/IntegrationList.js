import React from 'react'

import IntegrationItem from '../components/IntegrationItem'
import List from '../components/List'

import trello from '../assets/img/trello-icon.svg'
import notFound from '../assets/img/nodata-found.png'


export default ({ integrations, onRemove=f=>f, onActivate=f=>f }) => (
  <List>
    { !integrations.length
      ? (
        <List.Item>
          <div className="text-center">
            <img src={notFound} />
            <h6 className="mb-0"> No integration found .... </h6>
          </div>
        </List.Item>
      )
      : integrations.map((integration, i) => (
        <List.Item key={i}>
          <IntegrationItem key={i} integration={integration} providerIcon={trello} onRemove={onRemove} onActivate={onActivate} />
        </List.Item>)
      ) }
  </List>
)
