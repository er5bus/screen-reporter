import React from 'react'

import Button from './Button'

export default ({ integration, providerIcon, onRemove=f=>f, onActivate=f=>f }) => (
  <div className="d-flex align-items-center">
    <div>
      <div className="badge badge-circle mr-2">
        <img className="img-fluid" src={providerIcon} />
      </div>
    </div>
    <div>
      <h6 className="mb-0"> {integration.api_key.substring(0, 10)} .... </h6>
    </div>
    <div className="ml-2 mr-2">
      <Button sm={true} disabled={integration.active} style="danger" onClick={() => onRemove(integration.id)} text="remove" />
    </div>
    <div className="ml-2 mr-2">
      <Button sm={true} disabled={integration.active} style="warning" onClick={() => onActivate({active:true},integration.id)} text="activate" />
    </div>
  </div>
)
