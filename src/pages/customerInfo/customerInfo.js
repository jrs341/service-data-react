import { customerCollection } from '../../utils/firebase.js';
import { addDoc } from 'firebase/firestore/lite';
// need to check local storage if customer uses back button, maybe disable submit button
export function AddCustomer(event){
    event.preventDefault();
    let data = {};
    var elem = document.getElementById(event.target.id).elements;
      for(var i = 0; i < elem.length; i++)
        if(elem[i].name === "" || elem[i].value === "Submit"){}
        else {
          data[elem[i].name] = elem[i].value; 
        }
        addDoc(customerCollection, data)
          .then(docRef => {
          localStorage.setItem('ownerRefId', docRef.id);
          localStorage.setItem('fname', data.fname);
          localStorage.setItem('lname', data.lname);
      });
    };