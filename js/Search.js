import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'
const { string, arrayOf, shape } = React.PropTypes

// Good organization of code in React components
  // 1. PropTypes
  // 2. getInitialState()
  // 3. Lifcycle hooks
  // 4. Custom functions
  // 5. render()

const Search = React.createClass({
  propTypes: {
    searchTerm: string,
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows.filter((show) => {
            return `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.props.searchTerm.toUpperCase()) >= 0
          }).map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })}
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
