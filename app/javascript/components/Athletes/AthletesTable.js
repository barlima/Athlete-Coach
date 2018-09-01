import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import TableRecord from './TableRecord.js';
import { red, darkRed, green, darkGreen, sSize, mSize, xmSize, lSize } from '../../styles/Settings';

const Table = styled.div`
  background: ${darkRed};
  padding: ${sSize} 0;
  width: 100%;
`;

const Head = styled.div`
  border-bottom: 0.3rem solid ${red};
  color: white;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 0 ${sSize};

  div {
    margin: 0 ${sSize} 0 ${sSize};
    min-width: 200px;
    width: 25%;
  }

  div.sex {
    margin: 0;
    min-width: 50px;
    width: 50px;
  }

  div.options {
    margin: 0;
    min-width: 0;
    width: 61px;
  }
`;

class AthletesTable extends React.Component {
  render () {
    return (
      <Table>
          <Head>
            <div>Last Name</div>
            <div>First Name</div>
            <div className="sex">Sex</div>
            <div>Date of Birth</div>
            <div className="options"></div>
          </Head>
          {this.props.athletes.map((athlete) => (
            <TableRecord 
              key={athlete.id}
              id={athlete.id}
              firstName={athlete.firstName}
              lastName={athlete.lastName}
              sex={athlete.sex}
              dateOfBirth={athlete.dateOfBirth}
              handleRemove={this.props.handleRemove}
            />
          ))}
      </Table>
    )
  }
}

AthletesTable.propTypes = {
  athletes: PropTypes.array,
  handleRemove: PropTypes.func
};

export default AthletesTable;
