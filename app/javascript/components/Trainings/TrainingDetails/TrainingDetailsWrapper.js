import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import TrainingDetails from './TrainingDetails';

class TrainingDetailsWrapper extends React.Component {
  state = {
    query: gql`
      query Training(
        $training_param: String!
      ) {
        training(training_param: $training_param) {
          training_groups {
            id
            name
            athlete_ids
          }
        }
      }
    `
  }

  render() {
    return (
      <Query query={this.state.query} variables={{training_param: this.props.match.params.date}}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            
            return (
              <TrainingDetails training={data.training}/>
            )
          }}
      </Query>
    )
  }
}

export default TrainingDetailsWrapper;