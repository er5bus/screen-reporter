import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import browser from './utils/browserAPI'

// page routings
import { ROUTING, STORAGE, INIT_STATE } from './constants'

// main style
import './assets/scss/main.scss'

// store
import configureStore from './configureStore'

// loader
import Loader from './components/Loader'

// error handling
import ErrorBoundaryPage from './containers/ErrorBoundaryPage'
import ErrorPage from './components/ErrorPage'

// pages
const SettingsPage = React.lazy(() => import('./containers/SettingsPage'))
const ScreenCapturePage = React.lazy(() => import('./containers/ScreenCapturePage'))
const ForgotPasswordPage = React.lazy(() => import('./containers/ForgotPasswordPage'))
const LoginPage = React.lazy(()  => import('./containers/LoginPage'))
const RegisterPage = React.lazy(() => import('./containers/RegisterPage'))
const TrelloPage = React.lazy(() => import('./containers/TrelloPage'))
const PostPage = React.lazy(() => import('./containers/PostPage'))
const ProfilePage = React.lazy(() => import('./containers/ProfilePage'))


browser.storage.getItem(STORAGE.STORE, INIT_STATE)
  .then((preloadedState) => {
    const store = configureStore(typeof preloadedState === 'object' ? preloadedState : JSON.parse(preloadedState))

    store.subscribe(() => {
      browser.storage.setItem(STORAGE.STORE, store.getState())
    })

    render(
      <Provider store={store}>
        <Router>
            <div className="main">
              <Suspense fallback={<Loader />}>
                <Switch>
                  <Route strict exact path={ROUTING.OPTIONS_PAGE} component={SettingsPage} />
                  <Route exact path={ROUTING.SCREEN_CAPTURE_EDITOR.PATH} component={ScreenCapturePage} />
                  <Route exact path={ROUTING.LOGIN_PAGE} component={LoginPage} />
                  <Route exact path={ROUTING.REGISTER_PAGE} component={RegisterPage} />
                  <Route exact path={ROUTING.FORGOT_PASSWORD_PAGE} component={ForgotPasswordPage} />
                  <Route exact path={ROUTING.TRELLO_PAGE} component={TrelloPage} />
                  <Route exact path={ROUTING.POST_PAGE} component={PostPage} />
                  <Route exact path={ROUTING.PROFILE_PAGE} component={ProfilePage} />
                  <Route>
                    <ErrorPage code={404} message="Looks like the page you were looking for is no longer here" />
                  </Route>
                </Switch>
              </Suspense>
            </div>
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
