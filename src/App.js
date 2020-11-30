import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { FlexPage } from 'pages'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        {/*<Route exact path={'/'} component={MainPage} />*/}
        <Route path={'/flex'} component={FlexPage} />
      </Switch>
    </Router>
  )
}

export default App
