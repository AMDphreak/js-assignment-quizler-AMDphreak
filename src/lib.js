import fs from 'fs'

// selects n random array elements, where n is the number passed into the function
// chooseRandom: (items: [T], quantity: number) -> [T]
export const chooseRandom = (items = [], quantity) => {
  let prev = [] // The list of previously selected indices
  let selected = [] // The list of selected items
  let randIdx // index being randomly chosen
  for (let i = 0; i < quantity; i++) {
    // do while randIdx has not been picked before
    do {
      randIdx = Math.floor(Math.random() * items.length)
      // floor of between 0 and length (not inclusive).
      // so length 5 would be choosing between 0 1 2 3 4
    } while (!prev.includes(randIdx))

    prev.push(randIdx) // save record of index
    selected.push(items[randIdx]) // save item to new array
  }
  return selected
}

// Creates 
// takes an object with properties `numQuestions` and `numChoices`
// returns an array of objects in a specific format
// The `numQuestions` should have a default value of 1
// The `numChoices` should have a default value of 2
//  Returns -> [objects]
// [objects] takes the form:
// [
//   { // Questions are repeated numQuestion number of times
//     type: 'input',
//     name: `question-${(Question Number)}`,
//     message: `Enter question ${(Question Number)}`
//   },
//   { // Choices are repeated numChoices number of times for each question
//     type: 'input',
//     name: `question-${(Question Number)}-choice-${(Choice Number)}`,
//     message: `Enter answer choice ${(Choice Number)} for question ${(Question Number)}`
//   },
//   .
//   .
//   .
// ]
export const createPrompt = (object) => {
  let {numQuestions = 1, numChoices = 2} = object
  let output = []
  let questions = 
  for (q of questions) {

  }
  // construct the object
  let type = 'input'
  let name
  name = 'question-' + Qnum

  name = 'question '
  
  // add the object
  output.push(object)
}

export const createQuestions = () => {
  // TODO implement createQuestions
}

export const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  })

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err =>
      err ? reject(err) : resolve('File saved successfully')
    )
  })
