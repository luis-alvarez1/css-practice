const backdrop = document.querySelector('.backdrop');
const selectPlanButtonList = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const cancelButton = document.querySelector('.modal__action--negative');
const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');
const ctaButton = document.querySelector('.main-nav__item--cta');

if (selectPlanButtonList) {
  for (const element of selectPlanButtonList) {
    element.addEventListener('click', () => {
      // modal.style.display = 'block';
      // backdrop.style.display = 'block';
      modal?.classList.add('visible');
      backdrop.style.display = 'block';
      setTimeout(() => {
        backdrop?.classList.add('visible');
      }, 10);
    });
  }
}

const hideModal = () => {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  modal?.classList.remove('visible');
  backdrop?.classList.remove('visible');
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 200);
};
cancelButton?.addEventListener('click', hideModal);
backdrop?.addEventListener('click', () => {
  mobileNav?.classList.remove('visible');
  hideModal();
});

toggleButton?.addEventListener('click', () => {
  mobileNav?.classList.add('visible');
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop?.classList.add('visible');
  }, 10);
});

ctaButton.addEventListener('animationstart', (event) => {
  console.log('animation started', event);
});
ctaButton.addEventListener('animationend', (event) => {
  console.log('animation ended', event);
});
ctaButton.addEventListener('animationiteration', (event) => {
  console.log('animation iterated', event);
});
