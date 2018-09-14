import React from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

class SaveTrainingGroups extends React.Component {
  state = {
    mutation: gql`
      mutation CreateTrainingGroups(
        $training_param: String!,
        $groups: [TrainingGroupInput]
      ) {
        createTrainingGroups(groups: $groups, training_param: $training_param)
      }
    `
  }

  saveGroups = () => {
    console.log(this.props.groups);
  }

  render() {
    return (
      <Mutation 
        mutation={this.state.mutation} 
      >
        {(createTrainingGroups, { data, loading, error }) => (
          <form onSubmit={e => {
            e.preventDefault();

            const trainingGroups = this.props.groups.map((g) => {
              return({
                name: g.name,
                athlete_ids: g.athletes.map((a) => parseInt(a.id))
              })
            });

            createTrainingGroups({ variables: {
                groups: trainingGroups,
                training_param: this.props.trainingParam
              }
            }).catch((res) => {
              console.log(res.graphQLErrors);
            });

            this.props.history.push(`/trainings/new/${this.props.trainingParam}`);
          }}>
            <button type='submit'>Save</button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default withRouter(SaveTrainingGroups);