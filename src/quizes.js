const questions = [
  {
    id: "q1",
    questionText: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Highly Textual Marking Language",
      "Hyperlink and Text Markup Language",
      "Hyperlinking Text Markup Language",
    ],
    correctOption: 0,
  },
  {
    id: "q2",
    questionText:
      "What is the correct order for the following HTML elements: <head>, <body>, <title>?",
    options: [
      "<head>, <title>, <body>",
      "<title>, <head>, <body>",
      "<title>, <body>, <head>",
      "<head>, <body>, <title>",
    ],
    correctOption: 1,
  },
  {
    id: "q3",
    questionText: "Which of the following is NOT a valid CSS selector?",
    options: [":first-child", ".class-name", "#id-name", "2ndElement"],
    correctOption: 3,
  },
  {
    id: "q4",
    questionText: "What does CSS stand for?",
    options: [
      "Cascading Style Sheet",
      "Creative Style Sheet",
      "Computer Style Sheet",
      "Colorful Style Sheet",
    ],
    correctOption: 0,
  },
  {
    id: "q5",
    questionText:
      "Which JavaScript framework is commonly used for building user interfaces?",
    options: ["Angular", "React", "Vue", "Ember"],
    correctOption: 1,
  },
  {
    id: "q6",
    questionText: "What is the purpose of a 'div' element in HTML?",
    options: [
      "It defines a hyperlink.",
      "It defines a section in a document.",
      "It defines an ordered list.",
      "It defines an image.",
    ],
    correctOption: 1,
  },
  {
    id: "q7",
    questionText:
      "Which HTTP status code indicates a successful request in web development?",
    options: [
      "200 OK",
      "404 Not Found",
      "500 Internal Server Error",
      "302 Found",
    ],
    correctOption: 0,
  },
  {
    id: "q8",
    questionText:
      "Which of the following is a JavaScript library for simplifying AJAX requests and handling events?",
    options: ["jQuery", "Bootstrap", "React", "Lodash"],
    correctOption: 0,
  },
  {
    id: "q9",
    questionText:
      "What is the purpose of the 'border-box' value in CSS 'box-sizing' property?",
    options: [
      "It includes the padding and border in the element's total width and height.",
      "It excludes the padding and border from the element's total width and height.",
      "It applies a shadow to the element.",
      "It changes the element's background color.",
    ],
    correctOption: 0,
  },
  {
    id: "q10",
    questionText:
      "What is the primary function of a web server in the context of web development?",
    options: [
      "It designs web pages.",
      "It processes user requests and delivers web content.",
      "It stores web development code.",
      "It tests web applications.",
    ],
    correctOption: 1,
  },
  {
    id: "q11",
    questionText: "",
    options: ["Finished"],
  },
];
export default questions;
