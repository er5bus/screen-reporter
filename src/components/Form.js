import React from 'react'
import FadeIn from 'react-fade-in'


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
    return data
  }

  const dispatchEvent = (events, elements, inputContaineErrors = []) => {
    let formNode = new Set(["INPUT", "SELECT", "TEXTAREA"])
    for(let input of elements) {
      if (formNode.has(input.nodeName) && inputContaineErrors.includes(input.name)){
        events.map((event) => input.dispatchEvent(event))
      }
    }
  }

  const isValidForm = (events, object) => {
    let validation, error=false
    let inputs = []
    React.Children.forEach(children, (child) => {
      if (child.props.validate){
        validation = Array.isArray(child.props.validate) ? child.props.validate : [child.props.validate]
        error = validation.some((fn) => fn.apply(null, [object[child.props.name]]))
        if (error) {
          inputs.push(child.props.name)
        }
      }
    })
    return inputs
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const object = serializeArray(event.target.elements)
    const inputContaineErrors = isValidForm([ new Event("blur")], object)
    if (!inputContaineErrors.length){
      Object.keys(object).forEach((key) => (object[key] === null || object[key] === "" ) && delete object[key])
      onSubmit(object)
    }else {
      const blurEvent = new Event("blur")
      const changeEvent = new Event("focus")
      dispatchEvent([blurEvent, changeEvent], event.target.elements, inputContaineErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FadeIn>
        {children}
      </FadeIn>
    </form>
  )
}
