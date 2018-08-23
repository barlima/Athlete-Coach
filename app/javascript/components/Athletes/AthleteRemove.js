import React from "react"
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

class AthleteRemove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mutation: gql`
        mutation RemoveAthlete($id: ID!) {
          removeAthlete(id: $id) {
            id
          }
        }
      `
    }
  }

  render() {
    return (
      <Mutation 
        mutation={this.state.mutation}
        update={(store, {data: { removeAthlete }}) => this.props.handleRemove(removeAthlete.id)}  
      >
        {(removeAthlete, { data }) => (
          <button onClick={e => {
            e.preventDefault();
            
            removeAthlete({ variables: {
              id: this.props.athleteId
            }});
          }}>
            Remove
          </button>
        )}
      </Mutation>
    )
  }
}

AthleteRemove.propTypes = {
  athleteId: PropTypes.string,
  handleRemove: PropTypes.func
};

export default AthleteRemove;