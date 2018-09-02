import React from "react";
import PropTypes from "prop-types";
import TrainingsCalendar from './TrainingsCalendar';

class Trainings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TrainingsCalendar />
    )
  }
}

export default Trainings;