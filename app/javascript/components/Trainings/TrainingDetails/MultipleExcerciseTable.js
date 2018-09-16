import React from 'react';
import styled from 'styled-components';
import { darkRed, darkGreen, sSize, red, lSize, lightRed, green, lightGreen, mSize } from '../../../styles/Settings';

const Table = styled.table`
  background-color: ${darkRed};
  border-bottom: 0.3rem solid ${darkRed};
  border-top: 0.3rem solid ${red};
  display: flex;
  margin-top: 0rem;
  padding: 0.3rem;
`;

const TableCell = styled.td`
  border-top: 0.3rem solid ${darkRed};
  display: flex;
  justify-content: space-between;
  flex: 1;
  width: 100%;
`;

const Number = styled.div`
  color: white;
  font-weigth: bold;
  padding-right: 1rem;
  margin-top: 2px;
  text-align: right;
  width: calc(80px + 0.3rem);
`;

const ExcerciseInput = styled.input`
  background: white;
  border: none;
  box-sizing: border-box;
  color: ${darkGreen};
  font-weight: bold;
  margin-right: 0.3rem;
  padding-left: ${sSize};
  width: calc(50% - (40px + 0.3rem) - 4rem + 0.15rem);
`;

const Extra = styled.div`
  width: 8rem;
  display: flex;

  button {
    background: ${lightGreen};
    border: none;
    color: ${darkGreen}
    font-size: 0.4rem;

    &:hover {
      background: ${darkGreen};
      color: white;
    }
  }
`;

const AddRow = styled.button`
  background: ${red};
  border: none;
  border: 0.3rem solid ${darkRed};
  border-radius: 0 0 0.5rem 0.5rem;
  color: white;
  flex: 1;
  width: 100%;

  &:hover {
    background: ${darkGreen};
    color: white;
  }
`;

class MultipleExcercisesTable extends React.Component {
  state = {
    numberOfRows: 1
  };

  addRow = () => {
    this.setState((prevState) => ({ numberOfRows: prevState.numberOfRows + 1 }));
  };

  removeRow = (e) => {
    this.setState((prevState) => ({ numberOfRows: prevState.numberOfRows - 1 }));
    this.props.removeSeries(this.props.excerciseNumber, e.target.attributes.name.value);
  };

  handleFirstFieldChange = (e) => {
    const row_col = e.target.attributes.name.value.split('_');
    const value = e.target.value;
    const row = row_col[0];
    const col = row_col[1];

    this.props.updateSeries(
      this.props.excerciseNumber,
      row,
      col,
      value
    )
  };

  handleSecondFieldChange = (e) => {
    const row_col = e.target.attributes.name.value.split('_');
    const value = e.target.value;
    const row = row_col[0];
    const col = row_col[1];

    this.props.updateSeries(
      this.props.excerciseNumber,
      row,
      col,
      value
    )
  };

  componentDidUpdate() {
    // console.log(this.state.numberOfRows);
  };

  fillRows = () => {
    let rows = [];

    for (let i = 0; i < this.state.numberOfRows; i++) {
      rows.push(
        <tr key={i}>
          <TableCell>
              <Number>{i + 1}.</Number>
              <ExcerciseInput 
                name={`${i}_0`} 
                placeholder="Distance"
                onChange={this.handleFirstFieldChange}
              />
              <ExcerciseInput 
                name={`${i}_1`}  
                placeholder="Time Limit"
                onChange={this.handleSecondFieldChange}
              />
              <Extra>
                { (i === (this.state.numberOfRows - 1) && this.state.numberOfRows !== 1) &&
                  <button 
                    onClick={this.removeRow}
                    name={`${i}`} 
                  >
                    <i className="material-icons">
                      remove
                    </i>
                  </button>
                }
              </Extra>
          </TableCell>
        </tr>
      );
    }

    return rows;
  }

  render() {
    return(
      <div>
        <Table>
          <tbody>
            {this.fillRows()}
          </tbody>
        </Table>
        <AddRow onClick={this.addRow}>
          + Add row
        </AddRow>
      </div>
    )
  }
}

export default MultipleExcercisesTable;