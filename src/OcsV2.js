/**
 *
 * Osc
 *
 */

import React from 'react';
import { memo } from 'react';
import Tone from 'tone';
import { Slider } from 'react-nexusui';
import { thisExpression } from '@babel/types';
import { on } from 'cluster';
// import styled from 'styled-components';
class Sintetizador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      mute: true,
      volume: -20,
      osc: new Tone.Oscillator(440, 'sine').toMaster(),
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // this.Sinte = this.Sinte.bind(this);
    //this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.initSinte = this.initSinte.bind(this)
    // this.Slider.onChange = this.Slider.onChange.bind(this)
    this.miVolumen = this.miVolumen.bind(this);



  }

  handleClick() {
    this.setState(function (prevState) {
      return { isToggleOn: !prevState.mute };
    });
  }

  miVolumen(v) {

  }

  initSinte() {

    // console.log();
    //this.props.osc.toMaster(); //connected to the master output

    // osc.volume.value = -20;


    this.setState(function (prevState) {

      if (prevState.mute === true) {

        prevState.osc.start();
        // this.miVolumen();




        Tone.Master.mute = false;

      }
      if (prevState.mute === false) {
        // prevState.osc.mute = true;
        prevState.osc.stop();
        // this.miVolumen();
        // Tone.Master.mute = true;

      }
      return {
        mute: !prevState.mute,

      };
    });


  }

  render() {

    return (
      <div>
        <button onClick={this.initSinte}>
          {this.state.mute ? 'ON' : 'OFF'}
        </button>
        <div>
          <Slider interaction="radial" onChange={this.miVolumen} min={-100} max={0} size={[200, 20]}></Slider>
        </div>
      </div>
    )
  }

}


export default memo(Sintetizador);
