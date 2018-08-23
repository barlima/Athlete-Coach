import React from "react"
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

class AthletesForm extends React.Component {
  state = {
    mutation: gql`
      mutation CreateAthlete(
        $first_name: String!, 
        $last_name: String!, 
        $date_of_birth: String!,
        $sex: String!, 
        $trainer_id: ID!
      ) {
          createAthlete(first_name: $first_name, last_name: $last_name, sex: $sex, date_of_birth: $date_of_birth, trainer_id: $trainer_id) {
            first_name
            last_name
            sex
            date_of_birth
            id
          }
      }
    `
  }

  render () {
    return (
      <Mutation 
        mutation={this.state.mutation} 
        update={(store, {data: { createAthlete }}) => this.props.onSubmit(createAthlete)}
      >
        {(createAthlete, { data }) => (
          <form id="add_athlete" onSubmit={e => {
            e.preventDefault();

            const first_name = e.target.elements.first_name.value;
            const last_name = e.target.elements.last_name.value;
            const sex = e.target.elements.sex.value;
            const date_of_birth = e.target.elements.date_of_birth.value;

            if (first_name && last_name && date_of_birth && sex) {

              createAthlete({ variables: {
                  first_name: first_name,
                  last_name: last_name,
                  sex: sex,
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
                  <td>
                    <select name="sex">
                      <option value="Male">M</option>
                      <option value="Female">F</option>
                    </select>
                  </td>
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
