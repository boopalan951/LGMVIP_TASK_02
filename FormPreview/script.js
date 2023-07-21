// JavaScript code (script.js)

const users = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const className = document.getElementById('class').value;
  const age = document.getElementById('age').value;
  const place = document.getElementById('place').value;
  
  const userData = {
    name,
    className,
    age,
    place,
  };

  users.push(userData);

  displayUsers();
  resetForm();
});

function displayUsers() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  users.forEach((user, index) => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-data');
    userDiv.innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Class: ${user.className}</p>
      <p>Age: ${user.age}</p>
      <p>Place: ${user.place}</p>
    `;
    outputDiv.appendChild(userDiv);
  });
}

function resetForm() {
  document.getElementById('name').value = '';
  document.getElementById('class').value = '';
  document.getElementById('age').value = '';
  document.getElementById('place').value = '';
}
