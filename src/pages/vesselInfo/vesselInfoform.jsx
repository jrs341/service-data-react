import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { addVessel } from './vesselInfoform.js';
import { VesselInfo } from '../../components/index.js'

const VesselInfoForm = () => {
  const [vType, setvType] = useState('Outboard');
  let navigate = useNavigate();

    const onSubmit = (event) => {
      event.preventDefault();
      addVessel(event, vType);
      navigate("/intakeFormComplete");
    };

    const typeChange = (event) => {
      setvType(event.target.value);
    }

  return (
    <div>
      <form id="form2" onSubmit={onSubmit}>
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
        
        <VesselInfo typeChange={typeChange} vType={vType}/>

        <h1 style={{ display: (vType === "Outboard" || vType === "V-Drive" || vType === "Sterndrive") ? "block" : "none"}}>
          Engine Information</h1>

        <div style={{ display: (vType === "Outboard" || vType === "V-Drive" || vType === "Sterndrive") ? "block" : "none"}}>
        <label for="eman">Engine Manufacturer:</label><br/>
        <input type="text" id="eman" name="eman"/><br/>
        </div>

        <div style={{ display: ((vType === "Outboard")) ? "block" : "none"}}>
        <label for="eyear">Year</label><br/>
        <input type="number" id="eyear" name="eyear"/><br/>
        </div>

        <div style={{ display: ((vType === "V-Drive" || vType === "Sterndrive")) ? "block" : "none"}}>
        <label for="emake">Model</label><br/>
        <input type="text" id="emodel" name="emake"/><br/>
        </div>

        <div style={{ display: ((vType === "Outboard")) ? "block" : "none"}}>
        <label for="emodel">Model Number</label><br/>
        <input type="text" id="emodelNum" name="emodelNum"/><br/>
        </div>

        <div style={{ display: ((vType === "Outboard")) ? "block" : "none"}}>
        <label for="ehp">Engine Horsepower:</label><br/>
        <input type="text" id="ehp" name="ehp"/><br/>
        </div>

        <div style={{ display: ((vType === "V-Drive" || vType === "Sterndrive")) ? "block" : "none"}}>
        <label for="ehp">Engine Size:</label><br/>
        <input type="text" id="esize" name="esize"/><br/>
        </div>

        <div style={{ display: ((vType === "Outboard" || vType === "V-Drive" || vType === "Sterndrive")) ? "block" : "none"}}>
        <label for="esn">Engine Serial Number:</label><br/>
        <input type="text" id="esn" name="esn"/><br/>
        </div>

        <br/>
      </form>
      <button type="submit" form="form2" value="Submit">Submit</button>
      </div>
  );
};

export { VesselInfoForm };