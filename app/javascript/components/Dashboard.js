import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import styled from 'styled-components';
import { red, darkRed, green, darkGreen, sSize, mSize, xmSize, lSize } from '../styles/Settings';
import Athletes from './Athletes/Athletes';
import Trainings from './Trainings';
import Results from './Results';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

const Panel = styled.div`
  background: ${red};
  display: flex;
  height: 5rem;
  justify-content: space-around;
  margin-bottom: 0.3rem;
`

const Navigation = styled(NavLink)`
  border: none;
  border-bottom: 0.3rem solid ${darkRed};
  color: white;
  flex: 1;
  font-weight: bold;
  padding-top: ${sSize};
  text-align: center;
  text-decoration: none;
  width: 20%;

  &:hover {
    color: ${darkRed};
    text-decoration: none;
  }
`

const navActive = {
  border: 'none',
  borderBottom: "0.3rem solid " + green
}

export const history = createHistory();

class Dashboard extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ApolloProvider client={client}>
          <Panel>
            <Navigation to="/athletes" activeStyle={navActive}>Athletes</Navigation>
            <Navigation to="/trainings" activeStyle={navActive}>Trainings</Navigation>
            <Navigation to="/results" activeStyle={navActive}>Results</Navigation>
          </Panel>
          <Switch>
            <Route path="/" render={() => <Athletes trainerId={this.props.trainerId}/>} exact={true} />
            <Route path="/athletes" render={() => <Athletes trainerId={this.props.trainerId}/>} exact={true} />
            <Route path="/trainings" component={Trainings} />
            <Route path="/results" component={Results} />
          </Switch>
        </ApolloProvider>
      </Router>
    )
  }
}

export default Dashboard;