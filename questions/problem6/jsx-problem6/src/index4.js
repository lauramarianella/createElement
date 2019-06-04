import React from 'react';
import ReactDOM from 'react-dom';


let datingProfiles = [
    {
      lookingFor: { gender: "female", kids: "not ok", smoking: false },
      gender: "male",
      name: "Peter Bob",
      occupation: {
        title: "teacher",
        salary: "30000",
        location: {
          city: "Montreal",
          province: "Quebec",
          country: "Canada"
        }
      }
    },
    {
      lookingFor: { gender: "male", kids: "ok", smoking: true },
      gender: "female",
      name: "Jessica Sue",
      occupation: {
        title: "manager",
        salary: "80000",
        location: {
          city: "Toronto",
          province: "Ontario",
          country: "Canada"
        }
      }
    },
    {
      lookingFor: { gender: "female", kids: "ok", smoking: false },
      gender: "female",
      name: "Grace Smith",
      occupation: {
        title: "CEO",
        salary: "900000",
        location: {
          city: "Vacouver",
          province: "British Colombia",
          country: "Canada"
        }
      }
    }
  ]

  let elemOfLocation = function(location){
      return(
        <div>
            <div>{"City: " + location.city}</div>
            <div>{"Povince: " + location.province}</div>
            <div>{"Country: " + location.country}</div>
        </div>
      );
  }
  
  let elemOfOccupation = function(occupation){
    return (
        <div>
            <div>{"Title: " + occupation.title}</div>
            <div>{"Salary: " + occupation.salary}</div>
            {elemOfLocation(occupation.location)}
        </div>
    );
  }

  let elemOfLookingFor = function(lookingFor){
    return (
        <div>
            <div>{"Looking for: " + lookingFor.gender}</div>
            <div>{"Kids: " + lookingFor.kids}</div>
            <div>{"Smoking: "}{(lookingFor.smoking)?"Yes":"No"}</div>
        </div>
    );
  }

  let elemOfDatingProfile = function(person){
    return(
        <div>
           <h1>{person.name}</h1>
           <div>{person.gender}</div>
           {elemOfLookingFor(person.lookingFor)}
           {elemOfOccupation(person.occupation)}
        </div>
    );
  }


  
  let divroot = document.getElementById("root");
  ReactDOM.render(datingProfiles.map(elemOfDatingProfile), divroot);
  //ReactDOM.render(<div>Hi</div>, divroot);