import React from 'react'
import PropTypes from "prop-types"
import Athletes from './Athletes.js'
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import TestQuery from './Query.js';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

class AddAthletes extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Athletes trainer_id={this.props.trainer_id} />
        <TestQuery trainer_id={this.props.trainer_id} />
      </ApolloProvider>
    )
  }
}

AddAthletes.propTypes = {
  trainer_id: PropTypes.number
};

export default AddAthletes