const backdrop = document.querySelector('.backdrop');
const selectPlanButtonList = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const cancelButton = document.querySelector('.modal__action--negative');
const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');

if (selectPlanButtonList) {
  for (let i = 0; i < selectPlanButtonList.length; i++) {
    selectPlanButtonList[i].addEventListener('click', () => {
      // modal.style.display = 'block';
      // backdrop.style.display = 'block';
      modal?.classList.add('visible');
      backdrop?.classList.add('visible');
    });
  }
}

const hideModal = () => {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  modal?.classList.remove('visible');
  backdrop?.classList.remove('visible');
};
cancelButton?.addEventListener('click', hideModal);
backdrop?.addEventListener('click', () => {
  mobileNav?.classList.remove('visible');
  hideModal();
});

toggleButton?.addEventListener('click', () => {
  mobileNav?.classList.add('visible');
  backdrop?.classList.add('visible');
});
