import React from "react";
import { VesselType } from "./index.js";

export class VesselInfo extends React.Component {
  constructor(props) {
    super();

    this.setvType = this.setvType.bind(this);
  }

    setvType (event) {
      this.props.setvType(event);
    };

  render() {
    return (
      <div>
        <h1>Vessel Information</h1>
        <div>
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