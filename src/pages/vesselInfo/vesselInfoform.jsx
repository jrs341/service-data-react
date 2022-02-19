import React from 'react';
import { addVessel } from './vesselInfoform.js';
import { VesselInfo } from '../../components/index.js'

export class VesselInfoForm extends React.Component {
  constructor () {
    super();
    this.state = {
     vType: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.setvType = this.setvType.bind(this);
  }
  
  onSubmit(event) {
    event.preventDefault();
    addVessel(event, this.state.vType);
  };

  setvType (event) {
    console.log('VesselInfoForm event', event.target.value);
    this.setState({
        vType: event.target.value
    });
};

  render() {
    return (
        <form id="form2" onSubmit={this.onSubmit}>
          <h1>Service Address</h1>
          <label for="sadr">Street Address:</label><br/>
          <input type="text" id="sadr" name="sadr"/><br/>
    
          <label for="scity">City:</label><br/>
          <input type="text" id="scity" name="scity"/><br/>
    
          <label for="sstate">State:</label><br/>
          <input type="text" id="sstate" name="sstate"/><br/>
    
          <label for="szip">Postal Code:</label><br/>
          <input type="number" id="szip" name="szip"/><br/>
    
          <label for="specInstr">Special Instructions:</label><br/>
          <input type="text" id="specInstr" name="specInstr" placeholder="Please list any gate codes necessary to access the vessel, location of the keys, etc... "/><br/>
          <br/>

          <label for="issueDescription">Description of the issue or service requested</label><br/>
          <input type="textarea" id="issueDescription" name="issueDescription" rows="4" cols="50" placeholder="Time is alloted based on the work you would like done to your vessel.  Please list ALL items in the description."/><br/>
          <br/>
          
          <VesselInfo setvType={this.setvType}/>
    
          <h1>Engine Information</h1>

          <label for="eman">Engine Manufacturer:</label><br/>
          <input type="text" id="eman" name="eman"/><br/>

          <label for="ehp">Engine Horsepower:</label><br/>
          <input type="text" id="ehp" name="ehp"/><br/>

          <label for="esn">Engine Serial Number:</label><br/>
          <input type="text" id="esn" name="esn"/><br/>

          <label for="eyear">Year</label><br/>
          <input type="number" id="eyear" name="eyear"/><br/>

          <label for="emake">Make</label><br/>
          <input type="text" id="emake" name="emake"/><br/>

          <label for="emodel">Model</label><br/>
          <input type="text" id="emodel" name="emodel"/><br/>
          <br/>

          <button type="submit" form="form2" value="Submit">Submit</button>
        </form>
    )
  }
}