import React from 'react';
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_ATHLETE = gql`
  mutation CreateAthlete(
    $first_name: String!, 
    $last_name: String!, 
    $date_of_birth: String!, 
    $trainer_id: ID!
  ) {
      createAthlete(first_name: $first_name, last_name: $last_name, date_of_birth: $date_of_birth, trainer_id: $trainer_id) {
        first_name
        last_name
        date_of_birth
      }
  }
`;

class TestMutation extends React.Component {
  render() {
    return (
      <Mutation mutation={CREATE_ATHLETE}>
        {(createAthlete, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createAthlete({ variables: {
                    first_name: "Jan",
                    last_name: "Niezbedny",
                    date_of_birth: "1987-10-09",
                    trainer_id: this.props.trainerId
                  } 
                });
              }}
            >
              <input type="text" name="first_name" form="add_athlete"/>
              <input type="text" name="last_name" form="add_athlete" />
              <input type="text" name="date_of_birth" form="add_athlete" />
              <button type="submit">Add Athlete</button>
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}

TestMutation.propTypes = {
  trainerId: PropTypes.number
};

export default TestMutation;