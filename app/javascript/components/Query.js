import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_ATHLETES = gql`
  {
    all_athletes {
      first_name
      last_name
      date_of_birth
    }
  }
`

const TestQuery = () => {
  return (
    <Query query={GET_ATHLETES}>
      {({ loading, error, data }) => {

        if (loading) return <div>Fetching</div>
        if (error) {
          return <div>Error</div>
        }

        return (
          <div>
            {data.all_athletes.map((athlete) => <p>{athlete.first_name} {athlete.date_of_birth}</p>)}
          </div>
        )
      }}
    </Query>
  )
}

export default TestQuery