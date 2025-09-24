const searchContainer = document.querySelector('.search-container');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
});


const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
const loginBtn = document.querySelector('.fa-user'); // your navbar login icon

loginBtn.addEventListener('click', e => {
  e.preventDefault();
  loginModal.classList.add('active');
});

closeLogin.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

window.addEventListener('click', e => {
  if (e.target === loginModal) loginModal.classList.remove('active');
});

