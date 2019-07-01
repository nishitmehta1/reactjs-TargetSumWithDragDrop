import React, { Component } from 'react';
import EachNumber from './EachNumber';

class EachOptionNumbers extends Component {
  render() {
    const optionNumbers = this.props.optionNumbers.map((number, id) => {
      return (
        <EachNumber
          handleDrop={this.props.handleDrop}
          key={id}
          number={number}
        />
      );
    });
    return <div className='optionsDiv'>{optionNumbers}</div>;
  }
}

export default EachOptionNumbers;
