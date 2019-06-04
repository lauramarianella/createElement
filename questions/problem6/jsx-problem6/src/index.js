import React from 'react'
import ReactDOM from 'react-dom'

let subreddits = [
  {
    name: "learnjavascript",
    moderators: [
      { name: "jacques", nickname: "codeislife" },
      { name: "bob", nickname: "robert" }
    ],
    posts: [
      {
        title: "X is not a property of undefined. What gives?",
        date: {
          month: "January",
          year: "2018",
          op: "somecoder"
        }
      },
      {
        title: "Have you heard of Wakata? Best website ever.",
        date: {
          month: "February",
          year: "2018",
          op: "othercoder"
        }
      }
    ]
  },
  {
    name: "learnpython",
    moderators: [{ name: "pete", nickname: "pythonista42" }],
    posts: [
      {
        title: "Help me with arrays please!",
        date: {
          month: "March",
          year: "2017",
          op: "coder42"
        }
      }
    ]
  }
]

let elemPost = function (post) {
  return (
    <div>
      <h3> name: {post.title}</h3>
      <div> month: {post.date.month}</div>
      <div> year: {post.date.year}</div>
      <div> op: {post.date.op}</div>
    </div>
  );
}

let elemModerator = function (modetator) {
  return (
    <div>
      <div> name: { modetator.name } nickname: {modetator.nickname}</div>
    </div>
  );
}

let elemLanguage = function(language) {
  return (
    <div>
      <h1>{language.name}</h1>
      {language.moderators.map(elemModerator)}
      {language.posts.map(elemPost)}
    </div>
  );
}

//ReactDOM.render( React.createElement('div',{},'Hola Laura') ,document.getElementById('root'));
ReactDOM.render( subreddits.map(elemLanguage),document.getElementById('root'));