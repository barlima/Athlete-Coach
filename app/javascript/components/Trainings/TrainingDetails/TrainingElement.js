import React from 'react';
import styled from 'styled-components';
import { red, darkRed, darkGreen, lightGreen, lightRed, sSize, mSize, xmSize, lSize, green } from '../../../styles/Settings';
import MultipleExcercisesTable from './MultipleExcerciseTable';
import ExcerciseTypeRadio from './ExcerciseTypeRadio';

const Element = styled.div`
  margin-top: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ExcerciseHeader = styled.div`
  display: flex;
  // flex: 1;
`;

const ExcerciseName = styled.input`
  // background-color: ${lightRed};
  border: 0.3rem solid ${darkRed};
  border-left: none;
  // border-right: none;
  color: ${darkGreen};
  flex: 1;
  font-weight: bold;
  padding-left: ${sSize};
`

const RemoveButton   = styled.button`
  background-color: ${lightGreen};
  border: 0.3rem solid ${darkRed};
  border-left: none;
  border-radius: 0 0.5rem 0 0;
  color: ${darkGreen};
  width: 8rem;

  &:hover {
    background-color: ${darkGreen};
    color: white;
  }
`;

class TrainingElement extends React.Component {
  state = {
    excerciseType: 'SINGLE',
    excerciseName: ''
  };

  submitExcercise = (e) => {
    e.preventDefault();
  };

  removeExcercise = () => {
    this.props.removeExcercise(this.props.excerciseNumber);
  }

  getType = (excerciseType) => {
    this.setState(() => ({ excerciseType }));
  };

  handleExcerciseNameChange = (e) => {
    const newName = e.target.value;
    this.props.updateExcerciseName(this.props.excerciseNumber, newName);
  };

  componentDidUpdate() {
    // console.log(this.state.excerciseName);
  };

  render() {
    return (
      <Element>
        <Form onSubmit={this.submitExcercise}>
          <ExcerciseHeader>
            <ExcerciseTypeRadio 
              excerciseNumber={this.props.excerciseNumber}
              getType={this.getType} 
              onTypeChange={this.props.handleTypeChange}
            />
            <ExcerciseName 
              className={"excerciseName"} 
              placeholder="Excercise Name" 
              onChange={this.handleExcerciseNameChange}  
            />
            <RemoveButton onClick={this.removeExcercise}>Remove</RemoveButton>
          </ExcerciseHeader>
          {
            this.state.excerciseType === 'MULTIPLE' && (
              <MultipleExcercisesTable 
                excerciseNumber={this.props.excerciseNumber}
                updateSeries={this.props.updateSeries} 
                removeSeries={this.props.removeSeries}
              />
            )
          }
        </Form>
      </Element>
    )
  }
}

export default TrainingElement;