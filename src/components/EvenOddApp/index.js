// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    // console.log(count)

    let evenOdd
    if (count % 2 === 0) {
      evenOdd = 'Even'
    } else {
      evenOdd = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {evenOdd} </p>
          <div>
            <button className="knob" type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="instruction">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
