import React from "react";

export class VesselType extends React.Component {
  constructor(props) {
    super();
    this.state = {
      vType: ""
    };
    this.typeChange = this.typeChange.bind(this);
  }

  typeChange(event) {
    this.setState({
      vType: event.target.value
    });
    console.log('event', this.state.vType);
    this.props.setvType(event);
  };

  render() {
    return (
      <div onChange={this.typeChange}>
        <input type="radio" id="outboard" value="Outboard" name="vesselType" checked={this.state.vType === "Outboard"} /> Outboard<br/>
        <input type="radio" id="sternDrive" value="Sterndrive" name="vesselType" checked={this.state.vType === "Sterndrive"} /> Sterndrive<br/>
        <input type="radio" id="vDrive" value="V-Drive" name="vesselType" checked={this.state.vType === "V-Drive"} /> V-Drive<br/>
        <input type="radio" id="jski" value="Jet Ski" name="vesselType" checked={this.state.vType === "Jet Ski"} /> Jet Ski<br/>
        <br/>
      </div>
    );
  }
}