import React from "react"
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

class Athletes extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleRemoveAthlete = this.handleRemoveAthlete.bind(this);
    this.state = {
      query: gql`
        {
          athletes(trainer_id: ${this.props.trainer_id}) {
            id
            first_name
            last_name
            date_of_birth
          }
        }`,
      createAthleteMutation: gql`
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

  handleRemoveAthlete(athlete) {
    // ToDo: Handle it (database way - remove by ID)
    // console.log(athlete);
    // this.setState((prevState) => ({
    //   athletes: prevState.athletes.filter((a) => (
    //     athlete.first_name !== a.first_name ||
    //     athlete.last_name !== a.last_name ||
    //     athlete.date_of_birth !== a.date_of_birth
    //   ))
      console.log('HandleRemoveAthlete');
      // should be athlete.id !== a.id
    // }));
  }

  onSubmit(e) {
    e.preventDefault();

    const first_name = e.target.elements.first_name.value 
    const last_name = e.target.elements.last_name.value 
    const date_of_birth = e.target.elements.date_of_birth.value

    if (first_name && last_name && date_of_birth) {
      // this.setState((prevState) => ({
      //   athletes: prevState.athletes.concat([
      //     {
      //       first_name: first_name,
      //       last_name: last_name,
      //       date_of_birth: date_of_birth
      //     }
      //   ])
      // }));


      
      console.log('Submited');

      e.target.elements.first_name.value = '';
      e.target.elements.last_name.value = '';
      e.target.elements.date_of_birth.value = '';
    }
  }

  render () {
    return (
      <React.Fragment>
        {/* Greeting: {this.props.trainer_id} */}
        <Query query={this.state.query}>
          {({ loading, error, queryData }) => {
            
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>

              return (
                <Mutation mutation={this.state.createAthleteMutation}>
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
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {queryData.athletes.map((athlete) => (
                            <TableRecord 
                              key={athlete.id}
                              firstName={athlete.first_name}
                              lastName={athlete.last_name}
                              dateOfBirth={athlete.date_of_birth}
                              handleRemoveAthlete={this.handleRemoveAthlete}
                            />
                          ))}  
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
              )
            }}
          </Query>
      </React.Fragment>
    );
  }
}

Athletes.propTypes = {
  trainer_id: PropTypes.number
};

class TableRecord extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAthlete = this.handleRemoveAthlete.bind(this);
  }
  handleRemoveAthlete() {
    this.props.handleRemoveAthlete({
      first_name: this.props.firstName,
      last_name: this.props.lastName,
      date_of_birth: this.props.dateOfBirth
    })
  }
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.dateOfBirth}</td>
        {/* ToDo: Handle remove athlete */}
        <td><button onClick={this.handleRemoveAthlete}>Remove</button></td>
      </tr>
    )
  }
};

export default Athletes
