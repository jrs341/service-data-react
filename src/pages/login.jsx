import React from 'react'
import { customerCollection, emailsCollection } from '../utils/firebase.js';
import { addDoc, collection } from 'firebase/firestore/lite';

export default class login extends React.Component {
  constructor () {
    super()

    this.addCustomer = this.addCustomer.bind(this);
  }

  addCustomer(event) {
    event.preventDefault();
    let data = {};
    console.log('this', event.target.id);
    var elem = document.getElementById(event.target.id).elements;
      for(var i = 0; i < elem.length; i++)
        if(elem[i].name === "" || elem[i].value === "Submit"){console.log(elem[i].name)}
        else {
          data[elem[i].name] = elem[i].value; 
        }
        console.log('data', data);
        addDoc(customerCollection, data)
          .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          addDoc(emailsCollection, {
            to: 'jrs341@me.com',
            message: {
              subject: 'Hello from Firebase!',
              text: 'This is the plaintext section of the email body.',
              html: 'This is the <code>HTML</code> section of the email body.',
            }
          }).then(() => console.log('Queued email for delivery!'));
      });
    };

  render() {
    return (
    <form id="form1" onSubmit={this.addCustomer} autocomplete="on">
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