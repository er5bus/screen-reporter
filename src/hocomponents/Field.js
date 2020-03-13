import React from 'react'
import ReactDOM from 'react-dom'


export default Component => (

  class Field extends React.Component {

    constructor(props) {
      super(props)
      this.state = { error: false }
    }

    componentDidMount() {
      this.DOMfield = this.getField()
      this.DOMfield.addEventListener("validate", () => this.setState({error: true}))
    }

    componentWillUnmount() {
      this.DOMfield.removeEventListener("validate", () => this.setState({error: true}))
    }

    getField = () => {
      let elemsTag = new Set(["INPUT", "SELECT", "TEXTAREA"])
      let { name: fieldName } = this.props
      for(let elemTag of elemsTag){
        let elems = ReactDOM.findDOMNode(this).getElementsByTagName(elemTag)
        for(let elem of elems){
          if (elem.name === fieldName){
            return elem
          }
        }
      }
      return undefined
    }

    onBlur = (event) => {
      const value = (event && event.target) ? event.target.value : event
      this.validateInput(value)
    }

    validateInput = (value) => {
      const { validate= undefined } = this.props
      let { error } = this.state
      if (validate){
        const validation = Array.isArray(validate) ? validate : [validate]
        error = validation.some((fn) => fn.apply(null, [value]))
        this.setState({ error })
      }
    }
  
    render(){
      const { validate, ...input } = this.props
      return (<Component onBlur={this.onBlur} {...this.state}  {...input} />)    
    }
  }
)
