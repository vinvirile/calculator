// ~ DOM selectorsss
const buttons = document.querySelectorAll('button');
const [firstNumber, equType, secondNumber, answer] = [
  document.querySelector('.f-num'),
  document.querySelector('.e-type'),
  document.querySelector('.s-num'),
  document.querySelector('.answer'),
];

let solution, equation;

const init = function () {
  solution = 0;
  equation = [0, '', 0];
  answer.textContent = solution;
  firstNumber.textContent = equation[0] || '';
  equType.textContent = equation[1] || '';
  secondNumber.textContent = equation[2] || '';
};

init();

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      init();
      console.log('Calculator Cleared');
    }

    if (!isNaN(button.textContent)) {
      let num = Number(button.textContent);
      console.log('This is a number: ', Number(button.textContent));
    } else {
    }
  });
});
