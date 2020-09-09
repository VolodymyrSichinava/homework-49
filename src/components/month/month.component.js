import React, { Component } from 'react';
import {YEAR} from '../year/year.component';

const DateOfWeek = [
  'ПН',
  'ВТ',
  'СР',
  'ЧТ',
  'ПТ',
  'СБ',
  'ВС',
]

export default class MonthComponent extends Component {

  state = {
    number: 0,
    year: 0,
  }

  buttonClickHandler = (e) => {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    const title = this.props.startDate.toLocaleString('default', { month: 'long' });
    this.state.year = YEAR;
    let num = new Date(this.state.year, this.props.number + 1, 0).getDate();

    // let arr = [];

    // for (let i = 1; i <= num; i++) {
    //   arr.push(i);
    // }
    
    // let d = new Date();
    // let n = d.getDay() - 1;
    // console.log(DateOfWeek[n]);
    




    let nowDate = new Date();
    let today = nowDate.getDate();
    let currentMonth = this.props.number;
    let currentYear = YEAR;
    let temp = new Date(currentYear, currentMonth + 1, 0);
    let lastDay = temp.getDate();
    let arr = [];
    let next;
    let obj = {};

    let createTable = () => {
      let d = new Date(currentYear, currentMonth, 1);
      let t = d.getDay() - 1;
      if (t < 0) {
        t = 6;
      }
    
      let a = 0;
      while(d.getMonth() === currentMonth) {
        let i = 0;
        while (i < 7) {
          if (a === 0) {
            if (i < t) {
              // i++;
              // continue;
              arr.unshift(' ');
            }
            arr.push(d.getDate());
            d.setDate(d.getDate() + 1);
          } else {
            if (next > currentMonth) {
              break;
            }
            arr.push(d.getDate());
            d.setDate(d.getDate() + 1);
            next = d.getMonth();
          }
          i++;
        }
        a++;
      }
      
      // if (arr.length !== 7) {
      //   arr.unshift(' ');
      // }
      obj[currentMonth] = arr;
      // console.log(obj);
    }
    

createTable();
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