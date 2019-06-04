let rootdiv = document.getElementById('root');
// Using react.createElement, create a webpage with at least two images, one ul and two li elements
let elementDiv = React.createElement('div',{},
React.createElement('img',{src:"img/dead.png"}),
React.createElement('img',{src:"img/pickup.png"}),
React.createElement('ul',{}, React.createElement('li',{}, "Cofee"), 
    React.createElement('li',{}, "Tea"), 
    React.createElement('li',{}, "Milk") 
)

);

ReactDOM.render(elementDiv, rootdiv);