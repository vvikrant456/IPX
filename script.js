// alert('I am js');

const toggleBtns = document.querySelectorAll('.toggle-button');
const profileBtn = document.getElementById('profile');
const profileItems = document.getElementById('profile-items');
let isShow = false;
profileItems.classList.add('hide');
profileBtn.addEventListener('click', () => {
  if (isShow == false) {
    profileItems.style.display = 'block';
    isShow = true;
  } else {
    profileItems.style.display = 'none';
    isShow = false;
  }
});

toggleBtns.forEach(function (btn, index) {
  let answerBtn = document.getElementById(`answer${index + 1}`);
  if (btn.innerText === '+') answerBtn.style.display = 'none';
  else answerBtn.style.display = 'block';
});

toggleBtns.forEach(function (btn, index) {
  btn.addEventListener('click', () => {
    // console.log(btn.innerText);
    let answerBtn = document.getElementById(`answer${index + 1}`);
    if (btn.innerText === '-') {
      answerBtn.style.display = 'none';
      answerBtn.style.transition = '1s';
      btn.innerText = '+';
    } else {
      answerBtn.style.display = 'block';
      answerBtn.style.transition = '1s';
      btn.innerText = '-';
    }
  });
});
