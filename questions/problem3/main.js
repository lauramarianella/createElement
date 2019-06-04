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
  return React.createElement("div", {}, location.city + ", " + location.country);
}

//items properties: price, description, itemid, shipsFrom
let elemOfItem = function(item){
  return React.createElement("div", {}, 
    React.createElement("h3",{}, item.description)
    ,React.createElement("div", {}, item.price + " $")
    ,React.createElement("div",{}, "id: " + item.itemid)
    ,"Ships from: "
    , elemOfLocation(item.shipsFrom)   
    );
}

//seller properties: name, location, items
let elemOfSeller = function(seller){
  return React.createElement("div", {},
    React.createElement("h1", {}, seller.name),
    React.createElement("div", {}, elemOfLocation(seller.location)),
    seller.items.map(elemOfItem)
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