function toggleForms() {
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

  if (signInForm.style.display === 'none') {
    signInForm.style.display = 'flex';
    signUpForm.style.display = 'none';
  } else {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'flex';
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}