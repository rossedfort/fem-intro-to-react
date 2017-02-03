// Libs
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
// Styles
import '../public/normalize.css'
import '../public/style.css'
// Components
import Landing from './Landing'
import Search from './search'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
