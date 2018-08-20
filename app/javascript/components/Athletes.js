import React from "react"
import PropTypes from "prop-types"

class Athletes extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleRemoveAthlete = this.handleRemoveAthlete.bind(this);
    this.state = {
      athletes: [
        {
          first_name: 'Bartek',
          last_name: 'Perucki',
          date_of_birth: '10-06-1993'
        }
      ]
    }
  }

  handleRemoveAthlete(athlete) {
    // ToDo: Handle it (database way - remove by ID)
    console.log(athlete);
    this.setState((prevState) => ({
      athletes: prevState.athletes.filter((a) => (
        athlete.first_name !== a.first_name ||
        athlete.last_name !== a.last_name ||
        athlete.date_of_birth !== a.date_of_birth
      ))
      // should be athlete.id !== a.id
    }));
  }

  onSubmit(e) {
    e.preventDefault();

    const first_name = e.target.elements.first_name.value 
    const last_name = e.target.elements.last_name.value 
    const date_of_birth = e.target.elements.date_of_birth.value

    if (first_name && last_name && date_of_birth) {
      this.setState((prevState) => ({
        athletes: prevState.athletes.concat([
          {
            first_name: first_name,
            last_name: last_name,
            date_of_birth: date_of_birth
          }
        ])
      }));
      
      e.target.elements.first_name.value = '';
      e.target.elements.last_name.value = '';
      e.target.elements.date_of_birth.value = '';
    }
  }

  render () {
    return (
      <React.Fragment>
        {/* Greeting: {this.props.trainer_id} */}
          <form id="add_athlete" onSubmit={this.onSubmit}>
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
                {
                  this.state.athletes.map((athlete) => (
                    <TableRecord 
                      first_name={athlete.first_name}
                      last_name={athlete.last_name}
                      date_of_birth={athlete.date_of_birth}
                      handleRemoveAthlete={this.handleRemoveAthlete}
                      key={athlete.last_name}
                    />
                  ))
                }
                <tr>  
                  <td><input type="text" name="first_name" form="add_athlete"/></td>
                  <td><input type="text" name="last_name" form="add_athlete" /></td>
                  <td><input type="text" name="date_of_birth" form="add_athlete" /></td>
                  <td><button form="add_athlete">Add</button></td>  
                </tr>
              </tbody>
            </table>
          </form>
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
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      date_of_birth: this.props.date_of_birth
    })
  }
  render() {
    return (
      <tr>
        <td>{this.props.first_name}</td>
        <td>{this.props.last_name}</td>
        <td>{this.props.date_of_birth}</td>
        {/* ToDo: Handle remove athlete */}
        <td><button onClick={this.handleRemoveAthlete}>Remove</button></td>
      </tr>
    )
  }
};

export default Athletes
