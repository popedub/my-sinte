/**
 *
 * Osc
 *
 */

import React from 'react';
import { memo } from 'react';
import Tone from 'tone';
import { Slider } from 'react-nexusui';

class Sintetizador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      mute: true,
      volume: -20,
      frequency: 220,
      osc: new Tone.Oscillator(220, 'sine').toMaster(),
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // this.Sinte = this.Sinte.bind(this);
    //this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.initSinte = this.initSinte.bind(this)
    this.miFrecuencia = this.miFrecuencia.bind(this);
    this.miVolumen = this.miVolumen.bind(this);



  }

  handleClick() {
    this.setState(function (prevState) {
      return { isToggleOn: !prevState.mute };
    });
  }

  miVolumen(v) {
    this.setState(function (prevState) {
      // accedo a el valor del volumen, no sólo al props
      prevState.osc.volume.value = v;
      // luego lo asigno al props y ya funciona
      return { volume: prevState.osc.volume.value };
    });
  }

  miFrecuencia(v) {
    this.setState(function (prevState) {
      // accedo a el valor de la frecuencia, no sólo al props
      // el condicional es porque sino, la frecuencia es cero
      if(v > 0 ) {
        prevState.osc.frequency.value = v;

        // luego lo asigno al props y ya funciona
        return { frequency: prevState.osc.frequency.value };
      }
    });
  }

  initSinte() {

    this.setState(function (prevState) {

      if (prevState.mute === true) {

        prevState.osc.start();
        this.miFrecuencia();
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
          <Slider interaction="radial" onChange={this.miFrecuencia} value={220} min={-100} max={880} size={[400, 20]}></Slider>
        </div>
      </div>
    )
  }

}


export default memo(Sintetizador);
