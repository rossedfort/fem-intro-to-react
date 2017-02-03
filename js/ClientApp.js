import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      // props are passed in as 'attributes' on your jsx tag
      // they are by reference
      // jsx tags are closing
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='lololololololo' color='aliceblue' />
        <MyTitle title='yayayayayayaya' color='peru' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))

// React.createClass: creates a template for a component
// React.createElement: creates an instance of a component based on the template
// React.createFactory: easier way of creating a bunch of components
// createComponent calls must only return exactly one component otherwise you are writing invalid js
  // i.e. return x,y
