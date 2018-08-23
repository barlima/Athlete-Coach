import React from 'react'
import PropTypes from "prop-types"
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import AthletesWrapper from './AthletesWrapper';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

class AddAthletes extends React.Component {
  state = {
    query: gql`
    {
      athletes(trainer_id: ${this.props.trainerId}) {
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
      <ApolloProvider client={client}>
        <Query query={this.state.query}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              
              return (
                <AthletesWrapper trainerId={this.props.trainerId} athletes={data.athletes}/>
              )
            }}
        </Query>
      </ApolloProvider>
    );
  }
}

AddAthletes.propTypes = {
  trainerId: PropTypes.number
};

export default AddAthletes;