// ~ DOM selectorsss
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const [firstNumber, equType, secondNumber, answer] = [
  document.querySelector('.f-num'),
  document.querySelector('.e-type'),
  document.querySelector('.s-num'),
  document.querySelector('.answer'),
];
const [dayIcon, nightIcon] = [
  document.querySelector('.day-icon'),
  document.querySelector('.night-icon'),
];

if (this.sessionStorage.mode === 'night') {
  container.classList.add('night');
} else {
  container.classList.remove('night');
}

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

  //Checks if a is a mathmetical symbol
  let mathmeticalSymbol = a === '+' || a === '-' || a === 'X' || a === '÷';
  if (mathmeticalSymbol) {
    console.log(a);
  }
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      init();
      console.log('Calculator Cleared');
    } else if (answer.textContent.length > 8) {
    } else {
      updateCalculator(button.textContent);
      // buttons[0].textContent = 'C';
    }
  });
});

dayIcon.addEventListener('click', () => {
  container.classList.remove('night');
  this.sessionStorage.removeItem('mode');
});

nightIcon.addEventListener('click', () => {
  container.classList.add('night');
  this.sessionStorage.mode = 'night';
});

console.log(this);
