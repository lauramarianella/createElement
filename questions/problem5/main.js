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
    React.createElement('div',{}
      ,React.createElement('h3',{}, "name: " + post.title)
      ,React.createElement('div',{}, "month: " + post.date.month)
      ,React.createElement('div',{}, "year: " + post.date.year)
      ,React.createElement('div',{}, "op: " + post.date.op)
    )

  );
}

let elemModerator = function (modetator) {
  return (
    React.createElement('div',{}
      ,React.createElement('div',{}, "name: " + modetator.name + " nickname:" + modetator.nickname)
    )

  );
}

let elemLanguage = function(language) {
  return (
    React.createElement('div',{}
      ,React.createElement('h1',{}, language.name)
      ,language.moderators.map(elemModerator)
      ,language.posts.map(elemPost)
    )

  );
}

//ReactDOM.render( React.createElement('div',{},'Hola Laura') ,document.getElementById('root'));
ReactDOM.render( subreddits.map(elemLanguage),document.getElementById('root'));