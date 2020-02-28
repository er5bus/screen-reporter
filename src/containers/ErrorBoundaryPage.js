import React from 'react'


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    console.log(this.state)
    if (this.state.hasError) {
      console.log(this.state.hasError)
      return (
        <>
          <div class="text">
            <h1>Something went wrong.</h1>
            <p>500</p>
          </div>
          <div class="container">
            <div class="caveman">
              <div class="leg">
                <div class="foot"><div class="fingers"></div></div>
              </div>
              <div class="leg">
                <div class="foot"><div class="fingers"></div></div>
              </div>
              <div class="shape">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              <div class="head">
                <div class="eye"><div class="nose"></div></div>
                <div class="mouth"></div>
              </div>
              <div class="arm-right"><div class="club"></div></div>
            </div>
            <div class="caveman">
              <div class="leg">
                <div class="foot"><div class="fingers"></div></div>
              </div>
              <div class="leg">
                <div class="foot"><div class="fingers"></div></div>
              </div>
              <div class="shape">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              <div class="head">
                <div class="eye"><div class="nose"></div></div>
                <div class="mouth"></div>
              </div>
              <div class="arm-right"><div class="club"></div></div>
            </div>
          </div>
        </>
      )
    }
    return this.props.children;
  }
}


export default ErrorBoundary
