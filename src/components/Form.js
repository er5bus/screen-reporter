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

  const dispatchEvent = (elements, inputContaineErrors = []) => {
    const formNode = new Set(["INPUT", "SELECT", "TEXTAREA"])
    const event = new Event("validate")
    for(let input of elements) {
      if (formNode.has(input.nodeName) && inputContaineErrors.includes(input.name)){
        input.dispatchEvent(event)
      }
    }
  }

  const isValidForm = (object) => {
    let validation, error=false
    let inputs = []
    React.Children.forEach(children, (child) => {
      if (child.props.validate){
        validation = Array.isArray(child.props.validate) ? child.props.validate : [child.props.validate]
        error = validation.some((fn) => fn.apply(null, [object[child.props.name]]))
        if (error) {
          inputs.push(child.props.name.replace("[]", ""))
        }
      }
    })
    return inputs
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const object = serializeArray(event.target.elements)
    const inputContaineErrors = isValidForm(object)
    if (!inputContaineErrors.length){
      Object.keys(object).forEach((key) => (object[key] === null || object[key] === "" ) && delete object[key])
      onSubmit(object)
    }else {
      dispatchEvent(event.target.elements, inputContaineErrors)
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
