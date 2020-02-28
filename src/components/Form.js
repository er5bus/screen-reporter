import React from 'react'


export default ({ children, onSubmit }) => {

  const serializeArray = (elements) => {
    const data = {}
    for(let input of elements){
      if (input.name !== "" && !input.name.endsWith("[]") ){
        data[input.name] = input.value
      }else if (input.name !== ""  && input.name.endsWith("[]")){
        const inputName = input.name.replace("[]", "")
        Array.isArray(data[inputName]) ? data[inputName].push(input.value) : data[inputName] = [input.value]
      }
    }
    console.log(data)
    return data
  }

  const dispatchEvent = (events, elements) => {
    let formNode = new Set(["INPUT", "SELECT", "TEXTAREA"])
    for(let input of elements) {
      if (formNode.has(input.nodeName)){
        events.map((event) => input.dispatchEvent(event))
      }
    }
  }

  const isValidForm = (object) => {
    let validation, error=false
    React.Children.forEach(children, (child) => {
      if (child.props.validate){
        validation = Array.isArray(child.props.validate) ? child.props.validate : [child.props.validate]
        error = validation.some((fn) => fn.apply(null, [object[child.props.name]]))
        if (error) {
          return;  
        }
      }
    })
    return !error
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const object = serializeArray(event.target.elements)
    if (isValidForm(object)){
      Object.keys(object).forEach((key) => (object[key] === null || object[key] === "" ) && delete object[key])
      onSubmit(object)
    }else {
      const blurEvent = new Event("blur")
      const changeEvent = new Event("change")
      dispatchEvent([blurEvent, changeEvent], event.target.elements)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
