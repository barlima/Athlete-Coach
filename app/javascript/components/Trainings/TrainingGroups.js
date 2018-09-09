import React from 'react';
import styled from 'styled-components';
import { xmSize, lSize } from '../../styles/Settings';
import {Link, NavLink} from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import AvailableAthletes from './AvailableAthletes';
import TrainingGroup from './TrainingGroup';
import GroupDiv from './GroupDiv';

const Path = styled.div`
  display: flex;
`

const GroupsPanel = styled.div`
  display: flex;
  justify-content: space-around;
`

const ReadyGroups = styled.div`
  display: flex;
  flex-direction: column;
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
    chosenAthletes: [],
    groups: []
  }

  createGroups = () => {
    let trainingGroups = [];
    let group = undefined;
    const groupsCount = this.state.groups.length;

    for (let i = 0; i < groupsCount; i++) {
      group = this.state.groups[i];
      trainingGroups.push(
        <GroupDiv group={group}/>
        // <div key={i}>
        //   <h3>{group.name}</h3>
        //   {group.athletes.map((athlete) => {
        //     return (
        //       <p key={athlete.id}>
        //         {`${athlete.first_name} ${athlete.last_name}`}
        //       </p>
        //     )
        //   })}
        // </div>
      )
    }

    trainingGroups.push(
      <TrainingGroup 
        athletes={this.state.movedAthletes} 
        clearAll={this.clearAll}
        individualize={this.individualize}
        key='empty form'
        moveAthleteBack={this.moveAthleteBack}
        setGroup={this.setGroup} 
      />
    )

    return trainingGroups;
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

  setGroup = (groupName, athletes) => {
    // console.log(groupName);
    this.setState((prevState) => ({
      groups: prevState.groups.concat({
        name: groupName,
        athletes: [...athletes]
      }),
      chosenAthletes: prevState.chosenAthletes.concat(prevState.movedAthletes),
      movedAthletes: []
    }));
  }

  individualize = () => {
    console.log(this.state.movedAthletes);

    const newGroups = this.state.movedAthletes.map((athlete) => ({
      name: `${athlete.first_name} ${athlete.last_name}`,
      athletes: [athlete]
    }))

    console.log(newGroups);

    this.setState((prevState) => ({
      groups: prevState.groups.concat(newGroups),
      chosenAthletes: prevState.chosenAthletes.concat(prevState.movedAthletes),
      movedAthletes: []
    }));
  }

  unassignedAthletes = (athletes) => {
    const withoutMovedAthletes = athletes.filter((athlete) => {
      return !this.state.movedAthletes.map((a) => (
        a.id
      )).includes(athlete.id);
    });
    return withoutMovedAthletes.filter((athlete) => {
      return !this.state.chosenAthletes.map((a) => (
        a.id
      )).includes(athlete.id);
    })
  }

  componentDidUpdate() {
    console.log(this.state);
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
          <ReadyGroups>
            {this.createGroups()}
          </ReadyGroups>
        </GroupsPanel>
        <Link to={`/trainings/new/${this.props.match.params.date}`}>Save</Link>
      </div>
    )
  }
}

export default TrainingGroups;