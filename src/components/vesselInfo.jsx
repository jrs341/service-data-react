import React from "react";
import { VesselType } from "./index.js";

export class FormVesselInfo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.setvType = this.setvType.bind(this);
  }

    onSubmit() { 
        this.props.onSubmit(this.state.vType);
    }

    setvType (event) {
        console.log('setvType event', event.target.value);
        this.setState({
            type: event.target.value
        });
    }

  render() {
    return (
      <div>
        <h1>Vessel Information</h1>
        <div onSubmit={this.onSubmit}>
          <label for="reg">Registration Number:</label><br/>
          <input type="text" id="reg" name="reg" placeholder="TX-1234-AB"/><br/>
          <br/>

            <VesselType setvType={this.setvType}/>

          <label for="vyear">Year</label><br/>
          <input type="number" id="vyear" name="vyear"/><br/>

          <label for="vmake">Make</label><br/>
          <input type="text" id="vmake" name="vmake"/><br/>

          <label for="vmodel">Model</label><br/>
          <input type="text" id="vmodel" name="vmodel"/><br/>
        </div>
    </div>
    );
  }
}