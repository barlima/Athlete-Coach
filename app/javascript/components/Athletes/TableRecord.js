import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import AthleteOptions from './AthleteOptions.js';
import { red, darkRed, green, darkGreen, sSize, mSize, xmSize, lSize } from '../../styles/Settings';

const Table = styled.div`
  background: ${darkRed};
  padding: ${sSize} 0;
  width: 100%;
`;

const Record = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 ${sSize};

  div.column {
    margin: 0 ${sSize} 0 ${sSize};
    min-width: 200px;
    padding-top: 4px;
    width: 25%;
  }

  div.sex {
    margin: 0;
    min-width: 0;
    padding-top: 4px;
    text-align: center;
    width: 50px;
  }

  div.options {
    margin: 0;
    min-width: 61px;
    text-align: center;
  }
`;

class TableRecord extends React.Component {
  render() {
    return (
      <Table>
        <Record>
          <div className="column">{this.props.lastName}</div>
          <div className="column">{this.props.firstName}</div>
          <div className="sex">{this.props.sex[0]}</div>
          <div className="column">{this.props.dateOfBirth}</div>
          <div className="options">
            <AthleteOptions athleteId={this.props.id} handleRemove={this.props.handleRemove} />
          </div>
        </Record>
      </Table>
    )
  }
};

TableRecord.propTypes = {
  handleRemove: PropTypes.func
}

export default TableRecord;