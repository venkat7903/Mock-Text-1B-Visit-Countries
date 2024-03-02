import {Component} from 'react'

import CountryItem from '../countryItem'
import VisitedItem from '../VisitedItem'

import './index.css'

class Countries extends Component {
  constructor(props) {
    super(props)
    this.state = {countriesList: props.initialCountriesList}
  }

  onClickVisit = id => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: true}
        }
        return each
      }),
    }))
  }

  onClickRemove = id => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: false}
        }
        return each
      }),
    }))
  }

  renderCountriesList = () => {
    const {countriesList} = this.state

    return (
      <div className="countries-container">
        <h1 className="coun-title">Countries</h1>
        <ul className="coun-list">
          {countriesList.map(each => (
            <CountryItem
              key={each.id}
              countryDetails={each}
              onClickVisit={this.onClickVisit}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderVisitedCountries = () => {
    const {countriesList} = this.state
    const filteredList = countriesList.filter(each => each.isVisited === true)
    filteredList.sort()
    return (
      <div className="visited-container">
        <h1 className="coun-title">Visited Countries</h1>
        <ul className="visited-coun-list">
          {filteredList.map(each => (
            <VisitedItem
              key={each.id}
              visitedItemDetails={each}
              onClickRemove={this.onClickRemove}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {countriesList} = this.state
    const filteredList = countriesList.filter(each => each.isVisited === true)
    return (
      <div className="app-container">
        {this.renderCountriesList()}
        {filteredList.length > 0 ? (
          this.renderVisitedCountries()
        ) : (
          <p className="no-countries">No Countries Visited Yet</p>
        )}
      </div>
    )
  }
}

export default Countries
