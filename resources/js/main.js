// ABOUT-SECTION

// Show more button in about-text
const bioExtended = document.querySelector('.bio-extended');
const showBtn = document.querySelector('.show-btn');

showBtn.addEventListener('click', (e) => {
  bioExtended.classList.toggle('hide');
  if (!bioExtended.classList.contains('hide')) {
    showBtn.innerHTML =
      'Show less <img src="./resources/images/arrow-down.svg"></img></a>';
    showBtn.lastChild.style.transform = 'rotate(180deg)';
    bioExtended.style.height = 'auto';
  } else {
    showBtn.innerHTML =
      'Show more <img src="./resources/images/arrow-down.svg"></img></a>';
    showBtn.lastChild.style.transform = 'rotate(0deg)';
    bioExtended.style.height = '0';
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
