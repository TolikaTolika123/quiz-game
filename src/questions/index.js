const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: { a: "<script>", b: "<js>", c: "<javascript>", d: "<scripting>" },
    correctAnswer: "a",
  },
  {
    question: 'How do we log "Hello World" to console?',
    answers: {
      a: 'alert("Hello World")',
      b: 'console.log("Hello World")',
      c: 'print("Hello World")',
      d: 'msg("Hello World")',
    },
    correctAnswer: "b",
  },
  {
    question: "How do we create function in JavaScript?",
    answers: {
      a: "function:myFunction()",
      b: "function = myFunction()",
      c: "function myFunction()",
    },
    correctAnswer: "c",
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: {
      a: "call myFunction()",
      b: "myFunction()",
      c: "call function myFunction()",
    },
    correctAnswer: "b",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: {
      a: "if i = 5",
      b: "if (i = 5)",
      c: "if i == 5",
      d: "if (i == 5)",
    },
    correctAnswer: "d",
  },
];

export default questions;
