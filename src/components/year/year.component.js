import React from 'react';
import Month from '../../components';

const currentYear = new Date().getFullYear(); 

export default class yearComponent extends React.Component {

  state = {
    months: Array(12).fill(null).map((x, index) => {
      return {
        number: index,
        startDate: new Date(currentYear, index, 1),
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.months.map(month => <Month number={month.number} startDate={month.startDate}/>)}
      </div>
    );
  }
}