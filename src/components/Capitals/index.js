import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    selectedOneId: countryAndCapitalsList[0].id,
  }

  getSelectedObj = () => {
    const {selectedOneId} = this.state
    const selectedOne = countryAndCapitalsList.filter(
      eachOne => eachOne.id === selectedOneId,
    )
    return selectedOne
  }

  onSelectedOption = e => {
    this.setState({selectedOneId: e.target.value.toUpperCase()})
  }

  render() {
    const {selectedOneId} = this.state
    const selectedOne = this.getSelectedObj()
    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1 className="header">Countries And Capitals</h1>
          <div className="selectTag-container">
            <select className="select-card" onChange={this.onSelectedOption}>
              {countryAndCapitalsList.map(eachOne => (
                <option value={eachOne.capitalDisplayText}>
                  {eachOne.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="header">{selectedOne.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
