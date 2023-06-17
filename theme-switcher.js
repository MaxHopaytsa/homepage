const themeSwitcher = document.getElementById('theme-switcher');
const themeSwitcherText = document.getElementById('theme-switcher-text');
const body = document.body;

themeSwitcher.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeSwitcherText.textContent = 'Light Theme';
  } else {
    themeSwitcherText.textContent = 'Dark Theme';
  }
});