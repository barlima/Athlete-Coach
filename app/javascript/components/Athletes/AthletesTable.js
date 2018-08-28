import React from "react"
import PropTypes from "prop-types"
import AthleteRemove from './AthleteRemove.js';

class AthletesTable extends React.Component {
  render () {
    return (
      <table className="athletes-table">
        <thead className="athletes-table__head">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sex</th>
            <th>Date of Birth</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    )
  }
}

AthletesTable.propTypes = {
  athletes: PropTypes.array,
  handleRemove: PropTypes.func
};

class TableRecord extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.sex[0]}</td>
        <td>{this.props.dateOfBirth}</td>
        <td>
          <AthleteRemove athleteId={this.props.id} handleRemove={this.props.handleRemove} />
        </td>
      </tr>
    )
  }
};

TableRecord.propTypes = {
  handleRemove: PropTypes.func
}

export default AthletesTable;
