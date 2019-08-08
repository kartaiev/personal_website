const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const husbandContent = document.getElementById('husband-content');
const fatherContent = document.getElementById('father-content');
const teacherContent = document.getElementById('teacher-content');
const husbandImg = document.getElementById('husband-img');
const fatherImg = document.getElementById('father-img');
const teacherImg = document.getElementById('teacher-img');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
husbandContent.addEventListener('mouseover', husbandSlideOut);
husbandContent.addEventListener('mouseout', husbandSlideIn);
fatherContent.addEventListener('mouseover', fatherSlideOut);
fatherContent.addEventListener('mouseout', fatherSlideIn);
teacherContent.addEventListener('mouseover', teacherSlideOut);
teacherContent.addEventListener('mouseout', teacherSlideIn);

function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuNav.classList.toggle('show');
  menuBranding.classList.toggle('show');
  navItems.forEach(item => item.classList.toggle('show'));

  showMenu = !showMenu;
}

function husbandSlideOut() {
  husbandImg.className = 'slideout';
}

function husbandSlideIn() {
  husbandImg.className = 'slidein';
}

function fatherSlideOut() {
  fatherImg.className = 'slideout';
}

function fatherSlideIn() {
  fatherImg.className = 'slidein';
}

function teacherSlideOut() {
  teacherImg.className = 'slideout';
}

function teacherSlideIn() {
  teacherImg.className = 'slidein';
}
