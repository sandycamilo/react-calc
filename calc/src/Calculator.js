import React, { Component } from 'react'
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      bill: 0,
      tip: 0, 
      people: 0
    }
  }

  render() {
    return (
      <div className= "TipCalculator">
        <div class="display-input">
          <div class="Bill">
            <label for="bill">Bill: </label>
            <input 
              name="bill"
              type="number"
              value={ this.state.bill }
              onChange={ (e) => {this.setState({bill: e.target.value})} }
            />
          </div>
          <div class="Tip">
            <label for="tip">Tip %:</label>
            <input 
              name="tip"
              type="number"
              value={ this.state.tip }
              onChange={ (e) => {this.setState({tip: e.target.value})} }
            />
          </div>
          <div class="People">
            <label for="people">People:</label>
            <input 
              name="people"
              type="number"
              value={ this.state.people }
              onChange={ (e) => {this.setState({people: e.target.value})} }
            />
          </div>
        </div>
        <div class="display-totals">
          <h5>Bill: ${ this.state.bill }</h5>
          <h5>Tip: ${ this.state.bill * this.state.tip / 100 }</h5>
          <h5>Total: ${ this.state.bill * (1 + this.state.tip / 100) }</h5>
          <h5>Total per person: ${ (this.state.bill * (1 + this.state.tip / 100)) / this.state.people }</h5>
        </div>
      </div>
    )
  }
}

export default Calculator