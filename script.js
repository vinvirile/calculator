// ~ DOM selectorsss

// version control test

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

let solution, equation, newAnswer;

const init = function (a) {
  if (a === undefined) a = 0;

  solution = a;
  equation = [0, '', 0];
  newAnswer = true;
  answer.textContent = solution;
  firstNumber.textContent = equation[0] || '';
  equType.textContent = equation[1] || '';
  secondNumber.textContent = equation[2] || '';
};

const doMath = function (a) {
  a = Number(a);
  if (equation[0] && equation[1] && !isNaN(a)) {
    equation[2] = a;
    switch (equation[1]) {
      case '+':
        solution = equation[0] + a;
        break;
      case '-':
        solution = equation[0] - a;
        break;
      case 'X':
        solution = equation[0] * a;
        break;
      case '÷':
        solution = equation[0] / a;
        break;
    }

    secondNumber.textContent = equation[2];

    if (String(solution).split('').includes('.')) {
      answer.textContent = solution.toString().slice(0, 8);
    } else if (String(solution).length > 8) {
      answer.textContent = solution.toExponential(4);
    } else {
      answer.textContent = solution;
    }
  }
};

init();

const updateCalculator = function (a) {
  // CHECKS variable "a" button type

  //Checks if a is number
  if (!isNaN(Number(a))) {
    let num = Number(a);

    // There cannot be a 0 if answer is already 0

    if (answer.textContent == 0 && answer.textContent != '0.') {
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

    if (answer.textContent != 0) {
      equation[1] = a;

      if (!equation[0] && !equation[2]) {
        equation[0] = Number(answer.textContent);
        firstNumber.textContent = equation[0];
        equType.textContent = a;
        answer.textContent = '0';
      } else if (equation[0] + equation[1] + equation[2]) {
        // doMath(answer.textContent);
        // equation[0] = Number(answer.textContent);
        // answer.textContent = '0';
        // firstNumber.textContent = equation[0];
        // equation[2] = 0;
        // secondNumber.textContent = '';
        alert('Chaining operators is not ready! Please press the equal sign!');
      }
    }
  } else if (a === '=') {
    doMath(answer.textContent);
  }

  if (
    a === '·' &&
    !answer.textContent.split('').includes('.') &&
    answer.textContent.length !== 7
  ) {
    answer.textContent = `${answer.textContent}.`;
  }

  if (a === '+/-' && answer.textContent != 0) {
    if (Number(answer.textContent) < 0) {
      let strArr = answer.textContent.split('');
      strArr.shift();
      answer.textContent = strArr.join('');
    } else {
      answer.textContent = '-' + answer.textContent;
    }
  }
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      init();
      console.log('Calculator Cleared');
    } else {
      if (equation[0] && equation[1] && equation[2]) {
        if (
          button.textContent !== '+' &&
          button.textContent !== '-' &&
          button.textContent !== 'X' &&
          button.textContent !== '÷'
        ) {
          init();
        }

        updateCalculator(button.textContent);
      } else {
        if (answer.textContent.length < 8) {
          updateCalculator(button.textContent);
          // buttons[0].textContent = 'C';
        } else {
          if (
            button.textContent === '+' ||
            button.textContent === '-' ||
            button.textContent === 'X' ||
            button.textContent === '÷'
          ) {
            updateCalculator(button.textContent);
          }
        }
      }
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

/*
 *
 * BUGS TO FIX:
 * 1.) Finish the percentage
 * 2.) 0.1 + 0.2 does not work. Floating point rounding errors in JavaScript
 * 3.) Chaining the operators on expressions seems a bit unorganized
 *
 */
