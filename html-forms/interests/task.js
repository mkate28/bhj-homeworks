const interests = document.querySelectorAll('.interests_active'); 
const allCheckboxes = document.querySelectorAll('input');

interests.forEach(interest => {
  const groupInterest = interest.previousElementSibling.firstElementChild;
  const groupCheckboxes = interest.querySelectorAll('.interest__check');
  groupInterest.addEventListener('change', function() {
    if (this.checked) {
      groupCheckboxes.forEach(el => {
        el.checked = true;
      })
    } else {
      groupCheckboxes.forEach(el => {
        el.checked = false;
      })
    }
  })
})

allCheckboxes.forEach(item => {
   item.addEventListener('change', event => {
    let check = event.target;
    checkInput(check);
  })    
})

function checkInput(check) {
  const parentEl = (check.closest('ul').parentNode).querySelector('input');
  const sibElements = Array.from(parentEl.closest('li').querySelector('ul').querySelectorAll('input'));
  const checkStatus = sibElements.map(check => check.checked);
  const every = checkStatus.every(Boolean);
  const some = checkStatus.some(Boolean); 
  parentEl.checked = every;
  parentEl.indeterminate = !every && every !== some;
  if (check !== parentEl) {
    check = parentEl;
    checkInput(check);
  } else {
    return;
  }
} 