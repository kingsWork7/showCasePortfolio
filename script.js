let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// PORTFOLIO SCREW EVENTS // 

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.2 
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});



// MY CONTACT FORM // 

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "a1ccab64-f758-438b-bc68-8f9d7c746525");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

/// CODE FOR SKILLS SCROLL DISPLAY 

// document.addEventListener('DOMContentLoaded', () => {
//     const skillCards = document.querySelectorAll('.skill-card');
  
//     function showCardsOnScroll() {
//       skillCards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         // When card is 100px before entering viewport
//         if (rect.top < window.innerHeight - 100) {
//           card.classList.add('show');
//         }
//       });
//     }
  
//     // Run once on scroll and when user scrolls
//     window.addEventListener('scroll', showCardsOnScroll);
//   });


  