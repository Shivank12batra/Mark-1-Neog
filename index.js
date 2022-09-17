var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name? ")
console.log('Welcome ' + userName + " to DO YOU KNOW Shivank? ")
console.log('+1 For Every Right Answer and -1 for Every Wrong Answer')
var ques1 = {
  question: 'Where do I live? ',
  answer: 'delhi'
}

var ques2 = {
  question: 'My Favourite Football Team? ',
  answer: 'villarreal'
}

var ques3 = {
  question: 'My Favourite Football Player ? ',
  answer: 'manu trigueros'
}

var ques4 = {
  question: 'My favourite color?',
  answer: 'orange'
}

var ques5 = {
  question: 'My favorite show?',
  answer: 'breaking bad'
}

var questionsArray = [ques1, ques2, ques3, ques4, ques5]

var highScorers = [
  {
    name: 'Dojo',
    score: 3
  },
  {
    name: 'Lenon',
    score: 2
  },
  {
    name: 'Daniel',
    score: 1
  }
]


var score = 0

function game(questions) {
  for (i = 0; i < questions.length; i++) {
    var currSet = questions[i];
    var currQues = readlineSync.question(currSet.question);
    var currAns = currSet.answer
    if (currQues.toLowerCase() === currAns) {
      console.log('You guessed it right!')
      score += 1
    } else {
      console.log('Wrong! the current answer is ' + currAns)
      score -= 1
    }
  }
  console.log('Your final score: ' + score)
  return score
}

const player_score = game(questionsArray);
var player = {
  name: userName,
  score: player_score
}

// scores
var first = highScorers[0];
var second = highScorers[1];
var third = highScorers[2];

if (player_score > first.score) {
  third = second;
  second = first;
  first = player;
}

else if (player_score > second.score) {
  third = second;
  second = player;
}

else if (player_score >= third.score) {
  third = player;
}

console.log('Top Three Scorers Are:');
console.log(`${first.name} : ${first.score}`);
console.log(`${second.name} : ${second.score}`);
console.log(`${third.name} : ${third.score}`);