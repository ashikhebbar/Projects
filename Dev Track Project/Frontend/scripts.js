function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(section).style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    alert('Login successful!');
    // Implement your login logic here (e.g., API calls, authentication, etc.)
  } else {
    alert('Please enter both username and password.');
  }
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const newUsername = document.getElementById('new-username').value.trim();
  const email = document.getElementById('email').value.trim();
  const newPassword = document.getElementById('new-password').value.trim();

  if (newUsername && email && newPassword) {
    user.username = newUsername;
    user.email = email;

    alert('Sign-up successful! Please log in now.');
    showSection('login');
  } else {
    alert('Please fill in all the fields.');
  }
});

document.getElementById('buy-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const buyAmount = parseInt(document.getElementById('buy-amount').value.trim(), 10);
  const availableStorage = parseInt(document.getElementById('storage-amount').textContent.trim(), 10);

  if (buyAmount) {
    if (buyAmount > availableStorage) {
      alert('Error: The amount of storage you want to buy exceeds the available storage.');
    } else {
      alert(`You have successfully bought ${buyAmount} GB of storage!`);
      // Implement your buy logic here (e.g., API calls, updating storage, etc.)
    }
  } else {
    alert('Please enter the amount of storage to buy.');
  }
});


document.getElementById('rent-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const rentAmount = document.getElementById('rent-amount').value.trim();
  if (rentAmount) {
    alert(`You have successfully rented out ${rentAmount} GB of storage!`);
    // Implement your rent out logic here (e.g., API calls, updating storage, etc.)
  } else {
    alert('Please enter the amount of storage to rent out.');
  }
});

let loggedIn = false;
let user = {
  username: '',
  email: ''
};

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    // Assuming the user.username and user.email have been previously stored during sign-up
    user.username = username;

    // Update profile info with stored username and email, each on a new line
    document.getElementById('profile-username').textContent = user.username;
    document.getElementById('profile-info').innerHTML = `Username: ${user.username}<br>Email: ${user.email}`;
    
    loggedIn = true;
    document.getElementById('initial-header').style.display = 'none';
    document.getElementById('logged-in-header').style.display = 'block';
    showSection('home');
    alert('Logged in successfully');
  } else {
    alert('Please enter both username and password.');
  }
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const newUsername = document.getElementById('new-username').value.trim();
  const email = document.getElementById('email').value.trim();
  const newPassword = document.getElementById('new-password').value.trim();

  if (newUsername && email && newPassword) {
    user.username = newUsername;
    user.email = email;

    alert('Sign-up successful! Please log in now.');
    showSection('login');
  } else {
    alert('Please fill in all the fields.');
  }
});


document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Signed up successfully! Please log in now.');
  showSection('login');
});


function toggleProfileMenu() {
  const profileOptions = document.getElementById('profile-options');
  profileOptions.style.display = profileOptions.style.display === 'none' ? 'block' : 'none';
}

function logout() {
  loggedIn = false;
  alert('Logged out');
  document.getElementById('initial-header').style.display = 'block';
  document.getElementById('logged-in-header').style.display = 'none';
  showSection('initial-home');
}
document.addEventListener('click', function (e) {
  const profileOptions = document.getElementById('profile-options');
  if (!profileOptions.contains(e.target) && !e.target.matches('.profile-menu span')) {
    profileOptions.style.display = 'none';
  }
});



document.getElementById('buy-storage').addEventListener('click', function () {
  showSection('buy');
});

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(section).style.display = 'block';
}

document.getElementById('rent-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const rentAmount = document.getElementById('rent-amount').value.trim();
  const rentPrice = document.getElementById('rent-price').value.trim();

  if (rentAmount && rentPrice) {
    alert(`You have successfully rented out ${rentAmount} GB of storage at ${rentPrice} per GB!`);
    
    // Update storage page with new details
    document.getElementById('storage-username').textContent = user.username;
    document.getElementById('storage-amount').textContent = `${rentAmount} GB`;
    document.getElementById('storage-price').textContent = `$${rentPrice}`;
    
    // Redirect to home page
    showSection('home');
  } else {
    alert('Please enter both the amount of storage and the price.');
  }
});

// Handle login to initialize storage information


function handleLogin(username, password) {
  if (username && password) {
    user.username = username;

    // Update profile info with username and email
    document.getElementById('profile-username').textContent = user.username;
    document.getElementById('profile-info').textContent = `Username: ${user.username}\nEmail: ${user.email}`;

    loggedIn = true;
    document.getElementById('initial-header').style.display = 'none';
    document.getElementById('logged-in-header').style.display = 'block';
    showSection('home');
    alert('Logged in successfully');
  } else {
    alert('Please enter both username and password.');
  }
}

function showStorage() {
  showSection('storage');
}
