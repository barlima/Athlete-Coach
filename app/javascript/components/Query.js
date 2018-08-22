import React from 'react';
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class TestQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: gql`
        {
          athletes(trainer_id: ${this.props.trainer_id}) {
            first_name
            last_name
            date_of_birth
          }
        }`
    }
  }

  render() {
    return (
      <Query query={this.state.query}>
        {({ loading, error, data }) => {

          if (loading) return <div>Fetching</div>
          if (error) {
            console.log(error);
            return <div>Error</div>
          }

          return (
            <div>
              {data.athletes.map((athlete) => <p>{athlete.first_name} {athlete.date_of_birth}</p>)}
            </div>
          )
        }}
      </Query>
    )
  }
}

TestQuery.propTypes = {
  trainer_id: PropTypes.number
};

export default TestQuery