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
    
    return (
      <div className="App">
        <div className='year'>
          <button type="button" className='btn_year prev' onClick={this.buttonPrevClickHandler}>&lang;</button>
          {this.state.year}
          <button type="button" className='btn_year next' onClick={this.buttonNextClickHandler}>&rang;</button>
        </div>
        <div className='list_month'>
          {this.state.months.map(month => <Month number={month.number} startDate={month.startDate}/>)}
        </div>
      </div>
    );
  }
}