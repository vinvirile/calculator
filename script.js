// ~ DOM selectorsss
const buttons = document.querySelectorAll('button');
const [firstNumber, equType, secondNumber, answer] = [
  document.querySelector('.f-num'),
  document.querySelector('.e-type'),
  document.querySelector('.s-num'),
  document.querySelector('.answer'),
];

let solution, equation;

const init = function (a) {
  if (a === undefined) a = 0;

  solution = a;
  equation = [0, '', 0];
  answer.textContent = solution;
  firstNumber.textContent = equation[0] || '';
  equType.textContent = equation[1] || '';
  secondNumber.textContent = equation[2] || '';
};

init();

const updateCalculator = function (a) {
  // CHECKS variable "a" button type

  //Checks if a is number
  if (!isNaN(Number(a))) {
    let num = Number(a);

    // There cannot be a 0 if answer is already 0

    if (answer.textContent == 0) {
      if (num !== 0) {
        answer.textContent = num;
      }
    } else if (answer.textContent !== 0)
      answer.textContent = `${answer.textContent}${num}`;
  }
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      init();
      console.log('Calculator Cleared');
    } else {
      updateCalculator(button.textContent);
    }
  });
});
