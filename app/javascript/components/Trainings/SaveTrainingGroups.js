import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

class SaveTrainingGroups extends React.Component {
  state = {
    mutation: gql`
      mutation CreateTrainingGroups(
        $groups: [TrainingGroupInput]
      ) {
        createTrainingGroups(groups: $groups)
      }
    `
  }

  saveGroups = () => {
    console.log(this.props.groups);
  }

  render() {
    return (
      <div>
        <Mutation mutation={this.state.mutation} >
          {(createTrainingGroups, { data, loading, error }) => (
            <form onSubmit={e => {
              e.preventDefault();

              const trainingGroups = this.props.groups.map((g) => {
                return({
                  name: g.name,
                  athlete_ids: g.athletes.map((a) => parseInt(a.id))
                })
              })

              console.log(trainingGroups);

              createTrainingGroups({ variables: {
                  groups: trainingGroups
                }
              }).catch((res) => {
                console.log(res.graphQLErrors);
              })

            }}>
              <button type='submit'>Save</button>
            </form>
            // <Link type="submit" to={this.props.path} onClick={this.saveGroups}>Save</Link>
          )}
        </Mutation>
      </div>
    )
  }
}

export default SaveTrainingGroups;