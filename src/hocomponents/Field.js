import React from 'react'


export default Component => 

  class Field extends React.Component {

    constructor(props) {
      super(props)
      this.state = { error: false }
    }

    onBlur = (event) => {
      const value = (event && event.target) ? event.target.value : event.value
      const { onChange=false, validate } = this.props
      let { error } = this.state
      if (validate){
        const validation = Array.isArray(validate) ? validate : [validate]
        error = validation.some((fn) => fn.apply(null, [value]))
        this.setState({ error })
      }
      if (onChange) {
        onChange.apply(null, [value])
      }
    }
  
    render(){
      const { validate, ...input } = this.props
      return (<Component onBlur={this.onBlur} {...this.state}  {...input} />)    
    }
  }
