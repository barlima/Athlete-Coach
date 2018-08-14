import React from "react"
import PropTypes from "prop-types"

class Trainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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
        Greeting: {this.props.trainer_id}
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

Trainer.propTypes = {
  trainer_id: PropTypes.number
};

const TableRecord = (props) => {
  return (
    <tr>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>{props.date_of_birth}</td>
      {/* ToDo: Handle remove athlete */}
      <td><button>Remove</button></td>
    </tr>
  );
};

export default Trainer
