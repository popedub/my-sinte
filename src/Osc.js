/**
 *
 * Osc
 *
 */

import React from 'react';
import { memo } from 'react';
import Tone from 'tone';
import { Dial } from 'react-nexusui';
// import styled from 'styled-components';
class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      mute: true,
      frecuency: 440,
      volume: -20,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.Sinte = this.Sinte.bind(this);
    this.setFrecuencia = this.setFrecuencia.bind(this);



  }

  handleClick() {
    this.setState(function (prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  setVolumen = (value) => {

    const f = value * -10;
    // console.log(f)

    this.setState({
      volume: f
    })

  }

  Sinte(value) {

    const osc = new Tone.Oscillator()
      .toMaster(); //connected to the master output

    osc.volume.value = -20;

    this.setState(function(prevState){

      if (prevState.mute === true ){
        // osc.frecuency = prevState.frecuency;
        osc.start();
        osc.volume.value = prevState.volume;



        Tone.Master.mute = false;

      }
      if (prevState.mute === false )  {
        osc.mute = true;
        Tone.Master.mute = true;

      }
      return {
        mute: !prevState.mute,

      };
    });


  }

  render() {

    return (
      <div>
      <button onClick={this.Sinte}>
        {this.state.mute ? 'ON' : 'OFF'}
      </button>
      <div>
          <Dial interaction="radial" onChange={this.setVolumen } min="0" max="5" step="10"></Dial>
      </div>
      </div>
    )
  }

}

// class Sinte extends React.Component {


//   render() {
//     //a square wave at 440hz
//     const osc = new Tone.Oscillator(440, "square")
//       .toMaster().stop(); //connected to the master output


//     return (

//       <Boton>{osc}</Boton>



//     );
//   }
// }


// Sinte.propTypes = {
//   play: PropTypes.bool
// };

export default memo(Boton);
