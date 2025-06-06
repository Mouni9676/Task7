const userContainer = document.getElementById('user-container');
const errorMessage = document.getElementById('error-message');
const reloadBtn = document.getElementById('reload-btn');

function fetchUsers() {
  // Clear previous data and errors
  userContainer.innerHTML = '';
  errorMessage.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}</p>
        `;

        userContainer.appendChild(userCard);
      });
    })
    .catch(error => {
      errorMessage.textContent = `Error fetching data: ${error.message}`;
    });
}


fetchUsers();


reloadBtn.addEventListener('click', fetchUsers);
