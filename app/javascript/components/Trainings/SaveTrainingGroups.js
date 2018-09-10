import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class SaveTrainingGroups extends React.Component {
  saveGroups = () => {
    console.log(this.props.groups);
  }

  render() {
    return (
      <Link to={this.props.path} onClick={this.saveGroups}>Save</Link>
    )
  }
}

export default SaveTrainingGroups;