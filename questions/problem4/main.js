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
    lookingFor: { gender: "male", kids: "ok", smoking: false },
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
    React.createElement('div', {}
      ,React.createElement('div', {}, "City: " + location.city)
      ,React.createElement('div', {}, "Povince: " + location.province)
      ,React.createElement('div', {}, "Country: " + location.country)
    )
  );
}

let elemOfOccupation = function(occupation){
  return (
    React.createElement('div', {}
      ,React.createElement('div', {}, "Title: " + occupation.title)
      ,React.createElement('div', {}, "Salary: " + occupation.salary)
      ,elemOfLocation(occupation.location)
      )
    );
}

let elemOfLookingFor = function(lookingFor){
  return (
    React.createElement('div', {}
      ,React.createElement('div', {}, "Looking for: " + lookingFor.gender)
      ,React.createElement('div', {}, "Kids: " + lookingFor.kids)
      ,React.createElement('div', {}, "Smoking: " + (lookingFor.smoking)?"Yes":"No")
    )
  );
}

let elemOfDatingProfile = function(person){
  return(
    React.createElement('div', {}
      ,React.createElement('h1',{},person.name)
      ,React.createElement('div',{},person.gender)
      ,elemOfLookingFor(person.lookingFor)
      ,elemOfOccupation(person.occupation)
    )
  );
}




let divroot = document.getElementById("root");
ReactDOM.render(datingProfiles.map(elemOfDatingProfile), divroot);
//ReactDOM.render(<div>"Hi"</div>, divroot);//don't use this bcz it is JSX, 
//ReactDOM.render(React.createElement('div',{}, "Hi"), divroot);