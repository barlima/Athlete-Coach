import React from 'react';
import { red, darkRed, darkGreen, lightGreen, lightRed, sSize, mSize, xmSize, lSize, green } from '../../../styles/Settings';
import styled from 'styled-components';


const Panel = styled.div`
  border: 0.3rem solid ${darkRed};
  border-radius: 0.5rem;
  display: flex;

  button {
    background-color: ${lightGreen};
    border: none;
    color: ${darkGreen};
    flex: 1;
    padding-top: 0.6rem;

    &:hover {
      background-color: ${darkGreen};
      color: white;
    }
  }

  button.active {
    background-color: ${darkRed};
    color: white; 
  }
`;

class TrainingPanel extends React.Component {
  state = {
    activeButton: 'STADIUM'
  }

  activateStadiumButton = () => {
    this.setState(() => ({ activeButton: 'STADIUM' }));
  };

  activateGymButton = () => {
    this.setState(() => ({ activeButton: 'GYM' }));
  };

  activateOtherButton = () => {
    this.setState(() => ({ activeButton: 'OTHER' }));
  };

  render() {
    return(
      <Panel>
        <button 
          className={this.state.activeButton === 'STADIUM' ? "active" : ""}
          onClick={this.activateStadiumButton}  
        >
          <i className="material-icons">directions_run</i>
        </button>
        <button 
          className={this.state.activeButton === 'GYM' ? "active" : ""}
          onClick={this.activateGymButton}  
        >
          <i className="material-icons">fitness_center</i>
        </button>
        <button 
          className={this.state.activeButton === 'OTHER' ? "active" : ""}
          onClick={this.activateOtherButton}  
        >
          <i className="material-icons">all_inclusive</i>
        </button>
      </Panel>
    )
  }
};

export default TrainingPanel;