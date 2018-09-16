import React from 'react';
import { red, darkRed, darkGreen, lightGreen, lightRed, sSize, mSize, xmSize, lSize, green } from '../../../styles/Settings';
import styled from 'styled-components';


const Panel = styled.div`
  border: 0.3rem solid ${darkRed};
  border-radius: 0.5rem 0 0 0;
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

class ExcerciseTypeRadio extends React.Component {
  state = {
    activeButton: 'SINGLE'
  }

  activateSingleButton = () => {
    this.setState(() => ({ activeButton: 'SINGLE' }));
    this.props.getType('SINGLE');
    this.props.onTypeChange(this.props.excerciseNumber, 'SINGLE');
  };

  activateMultipleButton = () => {
    this.setState(() => ({ activeButton: 'MULTIPLE' }));
    this.props.getType('MULTIPLE');
    this.props.onTypeChange(this.props.excerciseNumber, 'MULTIPLE');
  };

  render() {
    return(
      <Panel>
        <button 
          id="single"
          className={this.state.activeButton === 'SINGLE' ? "active" : ""}
          onClick={this.activateSingleButton}  
        >
          <i className="material-icons">add</i>
        </button>
        <button 
          id="multiple"
          className={this.state.activeButton === 'MULTIPLE' ? "active" : ""}
          onClick={this.activateMultipleButton}  
        >
          <i className="material-icons">close</i>
        </button>
      </Panel>
    )
  }
};

export default ExcerciseTypeRadio;