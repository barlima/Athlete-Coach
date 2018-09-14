import React from 'react';

class TrainingElement extends React.Component {
  state = {
    radioActive: 'STADIUM'
  };

  submitExcercise = (e) => {
    e.preventDefault();
  };

  radioStadiumToggle = (e) => {
    this.setState(() => ({ radioActive: 'STADIUM' }));
  };

  radioGymToggle = (e) => {
    this.setState(() => ({ radioActive: 'GYM' }))
  };

  radioOtherToggle = (e) => {
    this.setState(() => ({ radioActive: 'OTHER' }))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitExcercise}>
          <input 
            type="radio" 
            value="stadium" 
            onChange={this.radioStadiumToggle} 
            checked={this.state.radioActive === 'STADIUM'} 
          />
          <input 
            type="radio" 
            value="gym" 
            onChange={this.radioGymToggle} 
            checked={this.state.radioActive === 'GYM'} 
          />
          <input 
            type="radio" 
            value="other"
            onChange={this.radioOtherToggle} 
            checked={this.state.radioActive === 'OTHER'} 
          />
          <input placeholder="Excercise Name" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default TrainingElement;