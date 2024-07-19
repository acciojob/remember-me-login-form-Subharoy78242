//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkbox = document.getElementById('checkbox');
  const extraButtonsDiv = document.getElementById('extra-buttons');

  // Check if there are saved credentials
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    const existingUserButton = document.createElement('button');
    existingUserButton.id = 'existing';
    existingUserButton.innerText = 'Login as existing user';
    extraButtonsDiv.appendChild(existingUserButton);

    existingUserButton.addEventListener('click', () => {
      alert(`Logged in as ${savedUsername}`);
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
  });
});