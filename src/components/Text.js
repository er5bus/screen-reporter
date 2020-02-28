import React from 'react'

export default ({align='left', mb=0, mt=0, object}) => {
  const renderElem = () => {
    let elem = []
    if (typeof object === 'string'){
      elem.push(<p key={0} className="m-0 p-0"><strong key={0}>Oops! </strong>{error.message}</p>)
    }else if (object && Object.entries(object).length){
      Object.entries(object).forEach(([key, value], i) =>
        elem.push(<p key={key} className="m-0 p-0"><strong key={key}>{key.toUpperCase()}: </strong>{Array.isArray(value) ? value.join(', ') : value}</p>)
      )
    }
    return elem
  }

  return (
    <div className="text-center">
    {renderElem(object)}
    </div>
  )
}
