import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import TrainingGroups from './TrainingGroups';
import TrainingDetailsWrapper from './TrainingDetails/TrainingDetailsWrapper'

// ToDo: 
// Create components to fetch altheltes and deploy them to groups

const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
const client = new ApolloClient({
    link: new HttpLink({
        credentials: 'same-origin',
        headers: {
            'X-CSRF-Token': csrfToken
        }
    }),
    cache: new InMemoryCache()
});

class NewTraining extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Switch>
            <Route 
              path="/trainings/new/:date/groups" 
              component={TrainingGroups}
              exact={true}
            />
            <Route 
              path="/trainings/new/:date" 
              component={TrainingDetailsWrapper} 
              exact={true}
            />
            <Route
              path="/trainings/new/:date/:id"
              component={TrainingDetailsWrapper} 
              exact={true}
            />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default NewTraining;