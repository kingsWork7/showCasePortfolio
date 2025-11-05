let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// To recieve email from companies
const formData = new FormData();
formData.append("access_key", "a1ccab64-f758-438b-bc68-8f9d7c746525");
formData.append("name", "John Doe");
formData.append("email", "john@example.com");
formData.append("message", "Hello World!");

const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formData
});


const allDivs = document.querySelectorAll('section > div');

  // Add the animation class to all of them
  allDivs.forEach(div => div.classList.add('drop-animate'));

  const revealOnScroll = () => {
    allDivs.forEach(div => {
      const rect = div.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        div.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Run once on load

// // To receive email from companies
// (async () => {
//   try {
//     const formData = new FormData();
//     formData.append("access_key", "a1ccab64-f758-438b-bc68-8f9d7c746525")

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     // You can comment these lines out if you don’t want the alert
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// const allDivs = document.querySelectorAll('section > div');

// // Add the animation class to all of them
// allDivs.forEach(div => div.classList.add('drop-animate'));

// const revealOnScroll = () => {
//   allDivs.forEach(div => {
//     const rect = div.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       div.classList.add('show');
//     }
//   });
// };

// window.addEventListener('scroll', revealOnScroll);
// revealOnScroll(); // Run once on load
