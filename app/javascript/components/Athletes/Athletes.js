import React from 'react'
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import AthletesWrapper from './AthletesWrapper';

class Athletes extends React.Component {
  state = {
    query: gql`
    {
      athletes {
        id
        first_name
        last_name
        sex
        date_of_birth
      }
    }`
  }

  render() {
    return(
      <Query query={this.state.query}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            
            return (
              <AthletesWrapper athletes={data.athletes}/>
            )
          }}
      </Query>
    );
  }
}

export default Athletes;