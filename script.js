
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); 
  navbar.classList.toggle('active'); 
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


let scrollTopBtn = document.querySelector('.footer-icon-top a');
scrollTopBtn.onclick = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = form.querySelector('input[placeholder="Full Name"]').value.trim();
  let email = form.querySelector('input[type="email"]').value.trim();
  let message = form.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields!");
    return;
  }

  
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }

  alert("Message sent successfully! ✅");
  form.reset();
});
