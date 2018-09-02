import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import AvaliableAthletes from './AvaliableAthletes';

const Path = styled.div`
  display: flex;
`

// ToDo: USE REDUX TO GET TRAINER_ID !!!!!!!!!!!!!!!!!!!!!!

class TrainingGroups extends React.Component {
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
    }
    `
  }
  render() {
    return (
      <div>
        <Query query={this.state.query}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            return (
              <AvaliableAthletes athletes={data.athletes} />
            )
          }}
        </Query>
        <Link to={`/trainings/new/${this.props.match.params.date}`}>Save</Link>
      </div>
    )
  }
}

export default TrainingGroups;