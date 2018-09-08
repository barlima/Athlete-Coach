import React from 'react';
import styled from 'styled-components';
import { xmSize, lSize } from '../../styles/Settings';
import {Link, NavLink} from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import AvailableAthletes from './AvailableAthletes';
import TrainingGroup from './TrainingGroup';

const Path = styled.div`
  display: flex;
`

const GroupsPanel = styled.div`
  display: flex;
  justify-content: space-around;
`

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
    `,
    movedAthletes: [],
  }

  moveAthlete = (athlete) => {
    this.setState((prevState) => ({
      movedAthletes: prevState.movedAthletes.concat(athlete)
    }));
  }

  moveAthleteBack = (athlete) => {
    this.setState((prevState) => ({
      movedAthletes: prevState.movedAthletes.filter((a) => ( a.id !== athlete.id ))
    }))
  }

  clearAll = () => {
    this.setState(() => ({ movedAthletes: [] }));
  }

  unassignedAthletes = (athletes) => {
    return athletes.filter((athlete) => {
      return !this.state.movedAthletes.map((a) => (
        a.id
      )).includes(athlete.id);
    });
  }

  render() {
    return (
      <div>
        <h2>Group Athletes</h2>
        <p>Select athletes and add them to similar groups.</p>
        <GroupsPanel>
          <Query query={this.state.query}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>

              return (
                <AvailableAthletes athletes={this.unassignedAthletes(data.athletes)} moveAthlete={this.moveAthlete} />
              )
            }}
          </Query>
          <TrainingGroup 
            athletes={this.state.movedAthletes} 
            clearAll={this.clearAll}
            moveAthleteBack={this.moveAthleteBack} 
          />
        </GroupsPanel>
        <Link to={`/trainings/new/${this.props.match.params.date}`}>Save</Link>
      </div>
    )
  }
}

export default TrainingGroups;