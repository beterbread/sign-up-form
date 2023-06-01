let password = document.querySelector('[name="password"]');
let confirm = document.querySelector('[name="confirm"]');
let text = document.querySelector('.password');
let row = document.querySelector('#password');
password.addEventListener('input', function() {
  if (confirm.value !== "") {
    text.textContent = "*Passwords do not match";  
    row.style.paddingBottom = '5px';
  }
  if (password.value === confirm.value) {
    text.textContent = "";
    row.style.paddingBottom = '15px';
  }
});
confirm.addEventListener('input', function() {
  if (password.value !== "") {
    text.textContent = "*Passwords do not match";  
    row.style.paddingBottom = '5px';
  }
  if (password.value === confirm.value) {
    text.textContent = "";
    row.style.paddingBottom = '15px';
  }
});
