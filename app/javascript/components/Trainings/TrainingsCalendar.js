import React from 'react';
import moment from "moment";
import styled from 'styled-components';
import { red, darkRed, green, darkGreen, sSize, mSize, xmSize, lSize } from '../../styles/Settings';

const CalendarNav = styled.div`
  background: ${darkRed};
  color: white;
  display: flex;
  justify-content: space-between;
  padding: ${sSize};

  h2 {
    font-weight: bold;
    padding-top: 6px;
  }

  button {
    background: ${darkGreen};
    border: none;
    color: ${green};
    font-weight: bold;
    min-width: 50px;
    padding-top: 6px;
  }
`

const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  th {
    background: ${red};
    color: white;
    text-align: center;
    padding: ${sSize};
  }

  tr {
    width: 100%;
  }

  td {
    background: ${darkRed};
    box-sizing: border-box;
    border: 0.3px solid ${red};
    color: white;
    font-size: ${mSize};
    font-weight: bold;
    height: 8rem;
    padding: 0.5rem;
    vertical-align: top;
  }

  tr:first-child td {
    border-top: 0;
  }

  tr td:first-child {
    border-left: 0;
  }

  tr:last-child td {
    border-bottom: 0;
  }

  tr td:last-child {
    border-right: 0;
  }
`

const AddTraining = styled.a`
  color: white;
  text-align: right;
  text-decoration: none;
`


class TrainingsCalendar extends React.Component {
  state = {
    day: parseInt(moment().format('D'), 10),
    month: parseInt(moment().format('M'), 10),
    year: parseInt(moment().format('YYYY'), 10),
  };

  daysInMonth = () => {
    return moment(
      this.state.year + "-" +
      this.state.month + "-" +
      this.state.day
    ).daysInMonth()
  }

  firstDayOfMonth = () => {
    return moment(
      this.state.year + "-" +
      this.state.month + "-1"
    ).day();
  }

  getRows = () => {
    const first_day = this.firstDayOfMonth() !== 0 ? this.firstDayOfMonth() : 7;
    return Math.ceil((this.daysInMonth() - (7 - (first_day - 1)))/7) + 1;
  }

  dateId = (day) => {
    return `${this.state.year}_${this.state.month}_${day}_${this.countTrainings(day)}`;
  }

  countTrainings = (day) => {
    // ToDo: Get number of trainings already done in this day
    return 1;
  }

  incrementMonth = () => {
    this.setState((prevState) => {
      if (prevState.month === 12) {
        return {
          month: 1,
          year: prevState.year + 1
        }   
      } else {
        return {
          month: prevState.month + 1
        }
      } 
    })
  };

  decrementMonth = () => {
    this.setState((prevState) => {
      if (prevState.month === 1) {
        return {
          month: 12,
          year: prevState.year - 1
        }
      } else {
        return {
          month: prevState.month - 1
        }
      }
    });
  }

  createTable = () => {
    let table = [];
    let counter = 1;
    const first_day = this.firstDayOfMonth() !== 0 ? this.firstDayOfMonth() : 7;

    for (let i = 0; i < this.getRows(); i++) {
      let children = [];

      for (let j = 0; j < 7; j++) {
        if (((first_day - 1) === j && 
              i === 0 && 
              counter <= this.daysInMonth()) || 
              (counter > 1 && 
              counter <= this.daysInMonth())) {
          children.push(
            <td>
              {counter}
              <AddTraining href={`/trainings/new/${this.dateId(counter)}/groups`}>+</AddTraining>
            </td>
          );
          counter += 1;
        } else {
          children.push(<td></td>);
        }
      } 

      table.push(<tr>{children}</tr>)
    }

    return table;
  }

  render() {
    return (
      <div>
        <CalendarNav>
          <button onClick={this.decrementMonth}>
            <i className="material-icons">
              fast_rewind
            </i>
          </button>
          <h2>{moment(this.state.month, 'M').format('MMMM') + " " + this.state.year}</h2>
          <button onClick={this.incrementMonth}>
            <i className="material-icons">
              fast_forward
            </i>
          </button>
        </CalendarNav>
        <Table>
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {this.createTable()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TrainingsCalendar;