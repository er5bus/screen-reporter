import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

import browser from './utils/browserAPI'

// page routings
import { ROUTING, STORAGE, INIT_STATE } from './constants'

// main style
import './assets/scss/main.scss'

// store
import configureStore from './configureStore'

// error handling
import ErrorPage from './components/ErrorPage'

// Router container
import RoutesContainer from './routes'


browser.storage.getItem(STORAGE.STORE, INIT_STATE)
  .then((preloadedState) => {
    const store = configureStore(typeof preloadedState === 'object' ? preloadedState : JSON.parse(preloadedState))

    store.subscribe(() => {
      browser.storage.setItem(STORAGE.STORE, store.getState())
    })

    render(
      <Provider store={store}>
        <Router>
          <RoutesContainer />
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  })
  .catch((err) => {
    render(
      <ErrorPage code={500} message="Looks like the page you were looking for is no longer here" />,
      document.getElementById('root')
    )
  })
