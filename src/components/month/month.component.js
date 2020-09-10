import React, { Component } from 'react';
import {YEAR} from '../year/year.component';

const DateOfWeek = [
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'Sa',
  'Su',
]

export default class MonthComponent extends Component {

  state = {
    number: 0,
    year: 0,
  }

  render() {
    const title = this.props.startDate.toLocaleString('default', { month: 'long' });
    this.state.year = YEAR;
    let currentMonth = this.props.number;
    let currentYear = this.state.year;
    let arr = [];
    let next;

    let createMonth = () => {
      let date = new Date(currentYear, currentMonth, 1);
      let indexDay = date.getDay() - 1;

      if (indexDay < 0) {
        indexDay = 6;
      }

      let week = 0;
      while(date.getMonth() === currentMonth) {
        let i = 0;
        while (i < 7) {
          if (week === 0) {
            if (i < indexDay) {
              arr.unshift(' ');
            }
            arr.push(date.getDate());
            date.setDate(date.getDate() + 1);
          } else {
            if (next > currentMonth) {
              break;
            }
            arr.push(date.getDate());
            date.setDate(date.getDate() + 1);
            next = date.getMonth();
          }
          i++;
        }
        week++;
      }
    }

    createMonth();

    return (
      <div>
        <div className='month' id= {`month${this.props.number}`}>
          <div className='month_title' id={`month_title${this.props.number}`}>{title}</div>
          <div className='date_Content'>
            {DateOfWeek.map(item => (
              <div className='day_In_Week'>{item}</div>
            ))}
            {arr.map(item => (
              <div className='day_In_Month'>{item}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}