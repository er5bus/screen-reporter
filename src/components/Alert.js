import React from 'react'


export default ({message, type="danger"}) => {
  const renderMessages = () => {
    let messages = []
    if (message && typeof message.message === 'string'){
      messages.push(<p key={0} className="m-0 p-0"><strong key={0}>Oops! </strong>{message.message}</p>)
    }else if (message && message.message && Object.entries(message.message).length){
      Object.entries(message.message).forEach(([key, value], i) =>
        messages.push(<p key={key} className="m-0 p-0"><strong key={key}>{key.toUpperCase()}: </strong>{Array.isArray(value) ? value.join(', ') : value}</p>)
      )
    }else {
      messages.push(<p key={0} className="m-0 p-0"><strong key={0}>Oops! </strong>Bad things happend</p>)
    }
    return messages
  }

  return (
    <div className={`alert alert-${type}`} role="alert">
      {renderMessages()}
    </div>
  )
}
