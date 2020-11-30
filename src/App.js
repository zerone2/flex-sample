import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { FlexPage, ModalPage } from 'pages'
import Header from 'components/header'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Header />
      <Switch>
        <Route exact path={'/'} component={<></>} />
        <Route path={'/flex'} component={FlexPage} />
        <Route path={'/modal'} component={ModalPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
