// ABOUT-SECTION

// Show more button in about-text
const bioExtended = document.querySelector('.bio-extended');
const showBtn = document.querySelector('.show-btn');

showBtn.addEventListener('click', function () {
  bioExtended.classList.toggle('hide');
});
