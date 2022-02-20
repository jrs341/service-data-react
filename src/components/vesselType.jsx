import React from "react";

const VesselType = ({typeChange, vType}) => {

  return (
    <div>
      <input type="radio" id="outboard" value="Outboard" name="vesselType" checked={vType === "Outboard"} onChange={typeChange} /> Outboard<br/>
      <input type="radio" id="sternDrive" value="Sterndrive" name="vesselType" checked={vType === "Sterndrive"} onChange={typeChange} /> Sterndrive<br/>
      <input type="radio" id="vDrive" value="V-Drive" name="vesselType" checked={vType === "V-Drive"} onChange={typeChange} /> V-Drive<br/>
      <input type="radio" id="jski" value="Jet Ski" name="vesselType" checked={vType === "Jet Ski"} onChange={typeChange} /> Jet Ski<br/>
      <br/>
    </div>
  );
};

export { VesselType };