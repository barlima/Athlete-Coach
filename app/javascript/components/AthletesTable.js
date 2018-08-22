import React from "react"
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import AthleteRemove from './AthleteRemove.js';

class AthletesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: gql`
        {
          athletes(trainer_id: ${this.props.trainerId}) {
            id
            first_name
            last_name
            date_of_birth
          }
        }`
    }
  }

  render () {
    return (
      <React.Fragment>
        {/* Greeting: {this.props.trainer_id} */}
        <Query query={this.state.query}>
          {({ loading, error, data }) => {
            
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>

              return (
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Date of Birth</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.athletes.map((athlete) => (
                      <TableRecord 
                        key={athlete.id}
                        id={athlete.id}
                        firstName={athlete.first_name}
                        lastName={athlete.last_name}
                        dateOfBirth={athlete.date_of_birth}
                      />
                    ))}
                  </tbody>
                </table>
              )
            }}
          </Query>
      </React.Fragment>
    );
  }
}

AthletesTable.propTypes = {
  trainerId: PropTypes.number
};

class TableRecord extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.dateOfBirth}</td>
        <td><AthleteRemove athleteId={this.props.id}/></td>
      </tr>
    )
  }
};

export default AthletesTable;
