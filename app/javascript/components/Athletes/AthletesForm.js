import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { red, darkRed, green, darkGreen, sSize, mSize, lSize } from '../../styles/Settings';

const Form = styled.form`
  background: ${darkRed};
  border-bottom: 0.3rem solid ${red};
  display: flex;
  justify-content: space-between;
  padding: ${sSize};
`

const Input = styled.input`
  background: ${darkRed};
  border: none;
  border-bottom: 1px solid ${red};
  box-sizing: border-box;
  color: white;
  margin: 0 ${sSize} 0 ${sSize};
  min-width: 200px;
  width: 25%;
  
  &:focus {
    border: none;
    border-bottom: 1px solid ${green};
  }
`;

const Button = styled.button`
  background: ${darkGreen};
  border: none;
  color: ${green};
  font-size: ${mSize};
  height: 30px;
  min-width: 61px;
  padding: 0;
  width: 30px;

  i {
    font-weight: bold;
    margin-top: 3px;
    padding: 0;
    width: 50px;
  }
`;

const Span = styled.span`
  color: ${green};
`

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
          <Form id="add_athlete" onSubmit={e => {
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
            <Input type="text" name="last_name" placeholder="Last Name" form="add_athlete" />
            <Input type="text" name="first_name" placeholder="First Name" form="add_athlete"/>
            
              <select name="sex">
                <option value="Male">M</option>
                <option value="Female">F</option>
              </select>
            
            <Input type="text" name="date_of_birth" placeholder="Date of Birth" form="add_athlete" />
            <Button form="add_athlete">
              <i className="material-icons">add</i>
            </Button>
          </Form>
        )}
      </Mutation>
    );
  }
}

AthletesForm.propTypes = {
  trainerId: PropTypes.number
};


export default AthletesForm;
