import React from 'react'
import ReactDOM from 'react-dom'

import './index.css';

let touristAttractions = [
  {
    name: "Eiffel tower",
    location: {
      city: "Paris",
      country: "France"
    },
    visitorsPerYear: 1000000,
    entrancePrice: 10,
    picture: "http://ipfactly.com/wp-content/uploads/2015/04/Eiffel-Tower.jpg"
  },
  {
    name: "Statue of liberty",
    location: {
      city: "New York",
      country: "USA"
    },
    visitorsPerYear: 800000,
    entrancePrice: 8,
    picture: "https://img-aws.ehowcdn.com/560x560p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/d5bf0683e8014a29bf1e210e91fea023"
  }
]

let elemLocation = function(location){
    return(
        <div>
            <div>Location: {location.city}, {location.country}</div>
        </div>
    )
}

let elemTouristAttraction = function(attraction){
    return(
        <div>            
            <h1>{attraction.name}</h1>
                <div className={'container'}>  
                <div>
                    <img src={attraction.picture} alt={attraction.name}/>
                </div>
                <div>
                    <h3>{attraction.name}</h3>
                    {elemLocation(attraction.location)}
                    <div>#Visitors/year: {attraction.visitorsPerYear}</div>
                    <div>Price $: {attraction.entrancePrice}</div>
                </div>
            </div>
        </div>
    )
}

//ReactDOM.render(<h1>Laura Hola</h1>, document.getElementById('root'))
ReactDOM.render(touristAttractions.map(elemTouristAttraction), document.getElementById('root'))