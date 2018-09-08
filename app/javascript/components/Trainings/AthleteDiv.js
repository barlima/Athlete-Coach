import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components';
import { red, darkRed, darkGreen, lightGreen, sSize, mSize, xmSize, lSize } from '../../styles/Settings';

const Athlete = styled.div`
  background: ${lightGreen};
  border: 0.3rem solid ${darkGreen};
  border-radius: 0.5rem;
  color: ${darkGreen};
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0.5rem;
  width: 30rem;

  p {
    margin: 0;
  }

  button {
    background: ${lightGreen};
    border: none;
    color: ${darkGreen};
    height: ${xmSize};
    padding: 0;
    margin: 0;
  }
`

class AthleteDiv extends React.Component {

  buttonFunc = () => {
    this.props.buttonFunc(this.props.athlete);
  };

  render() {
    return(
      <Athlete>
        <p>{`${this.props.athlete.first_name} ${this.props.athlete.last_name}`}</p>
        <button onClick={this.buttonFunc}>
          <i className="material-icons">
            {this.props.buttonIcon}
          </i>
        </button>
      </Athlete>
    )
  }
}

AthleteDiv.propTypes = {
  buttonFunc: PropTypes.func,
  buttonIcon: PropTypes.string,
  athlete: PropTypes.object,
};

export default AthleteDiv;