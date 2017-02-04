import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    showSearch: bool,
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (event) {
    this.dispatchSetSearchTerm(event.target.value)
  },
  render () {
    let utilSpace

    if (this.props.showSearch) {
      utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }

    return (
      <header>
        <h1>
          <Link to='/'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
