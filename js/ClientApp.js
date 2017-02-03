import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        // props are passed in by reference in a factory or createElement
        MyTitleFactory({title: 'props are cool', color: 'peru'}),
        MyTitleFactory({title: 'yayayaya', color: 'medimaquamarine'}),
        MyTitleFactory({title: 'lololololol', color: 'tomato'}),
        MyTitleFactory({title: 'huehuehuehue', color: 'papayawhip'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))

// React.createClass: creates a template for a component
// React.createElement: creates an instance of a component based on the template
// React.createFactory: easier way of creating a bunch of components
