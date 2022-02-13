import { customerCollection, emailsCollection } from '../../utils/firebase.js';
import { addDoc } from 'firebase/firestore/lite';

export function addCustomer(event){
    event.preventDefault();
    let data = {};
    var elem = document.getElementById(event.target.id).elements;
      for(var i = 0; i < elem.length; i++)
        if(elem[i].name === "" || elem[i].value === "Submit")
          {console.log(elem[i].name)}
        else {
          data[elem[i].name] = elem[i].value; 
        }
        addDoc(customerCollection, data)
          .then(docRef => {
          //console.log("Document written with ID: ", docRef.id);
          addDoc(emailsCollection, {
            to: data.email,
            message: {
              subject: 'Austin Mobile Marine Mechanic Service Request',
              text: `Hello ${data.fname} ${data.lname},
              
              Thank you for trusting Austin Mobile Marine Mechanic to service your vessel.  Please allow up to three days for scheduling. If you do not receive an option for scheduling within that timeframe, please feel free to call or send a text message to 512 200 3433.\n\nSincerely,\n\nJason Sinn\nAustin Mobile Marine Mechanic\n512 200 3433`,
            }
          }).then(() => console.log('Queued email for delivery!'));
      });
    };