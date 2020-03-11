import React, { Suspense } from "react"

import { Switch, Route, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import FadeIn from 'react-fade-in'

// page routings
import { ROUTING } from './constants'

// loader
import Loader from './components/Loader'

// error handling
import ErrorPage from './components/ErrorPage'

// pages
const IntegrationPage = React.lazy(() => import('./containers/IntegrationPage'))
const ScreenCapturePage = React.lazy(() => import('./containers/ScreenCapturePage'))
const ForgotPasswordPage = React.lazy(() => import('./containers/ForgotPasswordPage'))
const LoginPage = React.lazy(()  => import('./containers/LoginPage'))
const RegisterPage = React.lazy(() => import('./containers/RegisterPage'))
const TrelloPage = React.lazy(() => import('./containers/TrelloPage'))
const PostPage = React.lazy(() => import('./containers/PostPage'))
const ProfilePage = React.lazy(() => import('./containers/ProfilePage'))


const Routes = ({ location }) => (
  <>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route strict exact path={ROUTING.OPTIONS_PAGE} component={IntegrationPage} />
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
  </>
)


export default withRouter(Routes)
