import React from "react"
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

class AthletesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mutation: gql`
        mutation CreateAthlete(
          $first_name: String!, 
          $last_name: String!, 
          $date_of_birth: String!, 
          $trainer_id: ID!
        ) {
            createAthlete(first_name: $first_name, last_name: $last_name, date_of_birth: $date_of_birth, trainer_id: $trainer_id) {
              first_name
              last_name
              date_of_birth
            }
        }
      `
    }
  }

  render () {
    return (
      <Mutation mutation={this.state.mutation}>
        {(createAthlete, { data }) => (
          <form id="add_athlete" onSubmit={e => {
            e.preventDefault();

            const first_name = e.target.elements.first_name.value 
            const last_name = e.target.elements.last_name.value 
            const date_of_birth = e.target.elements.date_of_birth.value

            if (first_name && last_name && date_of_birth) {

              createAthlete({ variables: {
                  first_name: first_name,
                  last_name: last_name,
                  date_of_birth: date_of_birth,
                  trainer_id: this.props.trainerId
                } 
              });
            
              e.target.elements.first_name.value = '';
              e.target.elements.last_name.value = '';
              e.target.elements.date_of_birth.value = '';
            }
          }}>
            <table>
              <tbody>
                <tr>  
                  <td><input type="text" name="first_name" form="add_athlete"/></td>
                  <td><input type="text" name="last_name" form="add_athlete" /></td>
                  <td><input type="text" name="date_of_birth" form="add_athlete" /></td>
                  <td><button form="add_athlete">Add</button></td>  
                </tr>
              </tbody>
            </table>
          </form>
        )}
      </Mutation>
    );
  }
}

AthletesForm.propTypes = {
  trainerId: PropTypes.number
};


export default AthletesForm;
