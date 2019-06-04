import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


let sellers = [
    {
      name: "bob",
      location: {
        city: "Montreal",
        country: "Canada"
      },
      items: [
        {
          itemid: 0,
          price: 30,
          description: "a very nice hat",
          shipsFrom: {
            city: "Quebec",
            country: "Canada"
          }
        },
        {
          itemid: 1,
          price: 300,
          description: "a fast bicycle",
          shipsFrom: {
            city: "Quebec",
            country: "Canada"
          }
        }
      ]
    },
    {
      name: "sue",
      location: {
        city: "Toronto",
        country: "Canada"
      },
      items: [
        {
          itemid: 5,
          price: 60,
          description: "A warm peacoat",
          shipsFrom: {
            city: "Vancouver",
            country: "Canada"
          }
        },
        {
          price: 30000,
          description: "A nice boat",
          itemid: 1,
          shipsFrom: {
            city: "Seoul",
            country: "Korea"
          }
        }
      ]
    }
  ]
  
  //shipsFrom properties city, country
  let elemOfLocation = function (location){
    return (<div>{location.city + ", " + location.country}</div>);
  }
  
  //items properties: price, description, itemid, shipsFrom
  let elemOfItem = function(item){
    return (
    <div>
      <h3>{item.description}</h3>
      <div>{item.price + " $"}</div>
      <div>{"id: " + item.itemid}</div>
      {"Ships from: "}{elemOfLocation(item.shipsFrom)}
    </div>);
  }
  
  //seller properties: name, location, items
  let elemOfSeller = function(seller){
    return (
      <div>
      <h1>{seller.name}</h1>
      <div>{elemOfLocation(seller.location)}</div>
      {seller.items.map(elemOfItem)}
      </div>
    );
  }
  
  function elemOfSeller2(seller){
    return React.createElement("div", {},
      React.createElement("h1", {}, seller.name)
    );
  }
  
  
  let rootDiv = document.getElementById('root');
  ReactDOM.render(sellers.map(elemOfSeller),rootDiv);
  //ReactDOM.render(sellers.map((seller) => elemOfSeller2(seller)),rootDiv);
