import { vesselCollection, emailsCollection, customerCollection } from '../../utils/firebase.js';
import { addDoc, doc, updateDoc } from 'firebase/firestore/lite';

export function addVessel(event, vType){
    event.preventDefault();
    let data = {};
    var elem = document.getElementById(event.target.id).elements;
      for(var i = 0; i < elem.length; i++)
        if(elem[i].name === "" || elem[i].value === "Submit"){}
        else if (elem[i].name === "vesselType") {
          data["vesselType"] = vType;
        }
        else {
          data[elem[i].name] = elem[i].value; 
        }
        data["ownerRefId"] = localStorage.getItem('ownerRefId')
        addDoc(vesselCollection, data)
          .then(docRef => {
          let vesselId = docRef.id;
          updateDoc(doc(customerCollection, localStorage.getItem('ownerRefId')), {
            vesselId: vesselId
          });
          addDoc(emailsCollection, {
            to: localStorage.getItem('email'),
            message: {
              subject: 'Austin Mobile Marine Mechanic Service Request',
              text: `Hello ${localStorage.getItem('fname')} ${localStorage.getItem('lname')},
              
              Thank you for trusting Austin Mobile Marine Mechanic to service your vessel.  Please allow up to three days for scheduling. If you do not receive an option for scheduling within that timeframe, please feel free to call or send a text message to 512 200 3433.\n\nSincerely,\n\nJason Sinn\nAustin Mobile Marine Mechanic\n512 200 3433`,
            }
          }).then(() => console.log('Queued email for delivery!'));
      });
    };