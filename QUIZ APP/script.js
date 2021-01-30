const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
      question: 'WHAT BOROUGH OF NEW YORK CITY IS SPIDERMAN FROM?',
      answers: [
        { text: 'BROOKLYN', correct: false },
        { text: 'MANHATTAN', correct: false },
        { text: 'STATEN ISLAND', correct: false },
        { text: 'QUEENS', correct: true }
      ]
    },
    {
      question: 'IN HOMECOMING,WHAT IS THE NAME OF DELMARS CAT?',
      answers: [
        { text: 'MURPH', correct: true },
        { text: 'FRANKLIN', correct: false },
        { text: 'HOLLY', correct: false },
        { text: 'WHISKERS', correct: false }
      ]
    },
    {
      question: 'WHO IS PETERS BEST FRIEND AND THE GUY IN CHAIR?',
      answers: [
        { text: 'HAPPY', correct: false },
        { text: 'NED', correct: true },
        { text: 'FLASH', correct: false },
        { text: 'TOMMY', correct: false }
      ]
    },
    {
      question: 'IN SPIDER MAN: FAR FROM HOME SEES PETER AND HIS FRIENDS TRAVEL TO WHAT CONTINENT?',
      answers: [
        { text: 'SOUTH AMERICA', correct: false },
        { text: 'ANTARCTICA', correct: false },
        { text: 'ASIA', correct: false },
        { text: 'EUROPE', correct: true }
      ]
    },
    {
        question: 'WHAT IS THE NAME OF PROGARM THAT PETER GOT IN FARFROM HOME?',
        answers: [
          { text: 'E.D.I.T.H', correct: true },
          { text: 'B.A.R.F', correct: false },
          { text: 'M.A.Y.D.A.Y', correct: false },
          { text: 'M.O.R.G.A.N', correct: false }
        ]
    },
    {
        question: 'WHAT DOES NED SAY HE WANTS TO BUILD WITH PETER IN HOMECOMING?',
        answers: [
          { text: 'LEGO DEATH STAR', correct: true },
          { text: 'LEGO USS ENTERPRISE', correct: false },
          { text: 'LEGO OPTIMUS PRIME', correct: false },
          { text: 'LEGO MILLENIUM FALCON', correct: false }
        ]
    },
    {
        question: 'WHAT WAS SPIDER-MAN FIRST APPEARANCE IN MCU?',
        answers: [
          { text: 'IRON MAN II', correct: true },
          { text: 'CIVIL WAR', correct: false },
          { text: 'SPIDERMAN HOMECOMING', correct: false },
          { text: 'IRON MAN III', correct: false }
        ]
    }
  ]
  