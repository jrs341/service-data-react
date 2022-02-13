import React from 'react';
import { addCustomer } from './customerInfo.js';

export class CustomerInfo extends React.Component {
  constructor () {
    super()

    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event) {
    event.preventDefault();
    addCustomer(event);
  };

  render() {
    return (
    <form id="form1" onSubmit={this.onSubmit} autocomplete="on">
      <label for="email">Email Address:</label><br/>
      <input type="email" id="email" name="email"/><br/>

      <label for="tel">Phone Number:</label><br/>
      <input type="tel" id="tel" name="tel"/><br/>

      <label for="fname">First name:</label><br/>
      <input type="text" id="fname" name="fname"/><br/>

      <label for="lname">Last name:</label><br/>
      <input type="text" id="lname" name="lname"/><br/>

      <label for="adr">Street Address:</label><br/>
      <input type="text" id="adr" name="adr"/><br/>

      <label for="city">City:</label><br/>
      <input type="text" id="city" name="city"/><br/>

      <label for="state">State:</label><br/>
      <input type="text" id="state" name="state"/><br/>

      <label for="zip">Postal Code:</label><br/>
      <input type="text" id="zip" name="zip"/><br/>
      <br/>

      <button type="submit" form="form1" value="Submit">Submit</button>
    </form>
    )
  }
}