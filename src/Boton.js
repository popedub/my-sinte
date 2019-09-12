/**
 *
 * Boton
 *
 */

import * as react from 'react';
import React from 'react';
// import PropTypes from 'prop-types';
import { TextButton } from 'react-nexusui';


class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.play = {
      value: null,
    };
  }
render() {
// const play = Tone.start();
  return (

    <TextButton text="click"
      onClick={() => this.setState({ value: '1' })}
    >
      {this.play.value}
    </TextButton>


  )
}

}

export default react.memo(Keyboard);
