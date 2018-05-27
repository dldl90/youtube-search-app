import React, { PureComponent } from 'react'

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { 
      term: ''
    }
  }

  onInputChange(term) {
    this.setState ({
      term
    })
    this.props.onSearchTermChange(term)
    console.log(this.state.term)
  } 

  render() {
    const { term } = this.state

    return (
      <div>
        <input
          value={term}
          onChange={event => this.onInputChange(event.target.value)} />
        <br />
        value of the input: {term}
      </div>
    )
  }
}

