import React, { Component } from 'react';
import { Month} from '../../components';

const currentYear = new Date().getFullYear(); 
export let YEAR;

export default class YearComponent extends Component {

  state = {
    months: Array(12).fill(null).map((x, index) => {
      return {
        number: index,
        startDate: new Date(currentYear, index, 1),
        
      }
    }),
    year: currentYear,
  }

  buttonPrevClickHandler = () => {
    this.setState({
      year: this.state.year - 1,
    })
  }

  buttonNextClickHandler = () => {
    this.setState({
      year: this.state.year + 1,
    })
  }

  render() {
    YEAR = this.state.year;
    // let monthInYear = 12;
    // // let dayInMonth = new Date(currentYear, month, 0).getDate();
    // let arr = [];
    // let arrDay = [];
    
    // for (let i = 1; i < monthInYear + 1; i++) {
    //   arr.push(new Date(this.state.year, i, 0).getDate());
    // }
    
    return (
      <div className="App">
        <div className='year'>
          <button type="button" onClick={this.buttonPrevClickHandler}>Prev</button>
          {this.state.year}
          <button type="button" onClick={this.buttonNextClickHandler}>Next</button>
        </div>
        <div className='list_month'>
          {this.state.months.map(month => <Month number={month.number} startDate={month.startDate}/>)}
        </div>
      </div>
    );
  }
}