// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Toggle icon
      const icon = this.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
  
  // Close mobile menu when clicking on a nav link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // Testimonial Slider
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (track && slides.length > 0) {
    let currentIndex = 0;
    
    // Function to update the slider position
    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update active dot
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
    
    // Event listeners for prev/next buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlider();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
      });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
    
    // Auto-advance the slider
    setInterval(() => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateSlider();
    }, 5000);
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          
          // Change the icon
          const otherIcon = otherItem.querySelector('.faq-toggle i');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
      
      // Change the icon
      const icon = item.querySelector('.faq-toggle i');
      if (item.classList.contains('active')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate header height for offset
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form Submission Handling
  const trialForm = document.getElementById('trial-form');
  if (trialForm) {
    trialForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      
      let isValid = true;
      
      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('error');
      } else {
        nameInput.classList.remove('error');
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
      }
      
      if (subjectInput.value === "") {
        isValid = false;
        subjectInput.classList.add('error');
      } else {
        subjectInput.classList.remove('error');
      }
      
      if (isValid) {
        // Simulate form submission
        const submitBtn = trialForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        
        setTimeout(() => {
          trialForm.innerHTML = `
            <div class="success-message">
              <i class="fas fa-check-circle"></i>
              <h3>Thank You!</h3>
              <p>Your free trial request has been submitted successfully. We'll be in touch shortly with your account details.</p>
            </div>
          `;
        }, 1500);
      }
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');
      
      let isValid = true;
      
      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('error');
      } else {
        nameInput.classList.remove('error');
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
      }
      
      if (!messageInput.value.trim()) {
        isValid = false;
        messageInput.classList.add('error');
      } else {
        messageInput.classList.remove('error');
      }
      
      if (isValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
          contactForm.innerHTML = `
            <div class="success-message">
              <i class="fas fa-check-circle"></i>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We've received your message and will respond within 24 hours.</p>
            </div>
          `;
        }, 1500);
      }
    });
  }

  // Email validation helper function
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Sticky header on scroll
  const header = document.querySelector('header');
  let scrollPrev = window.pageYOffset;
  
  window.addEventListener('scroll', () => {
    const scrollCurrent = window.pageYOffset;
    
    // Add or remove header shadow based on scroll position
    if (scrollCurrent > 50) {
      header.classList.add('shadow');
    } else {
      header.classList.remove('shadow');
    }
    
    // Hide/show header on scroll direction
    if (scrollPrev > scrollCurrent) {
      header.style.top = "0";
    } else {
      // Only hide header when menu is closed on mobile
      if (!navLinks.classList.contains('active')) {
        header.style.top = `-${header.offsetHeight}px`;
      }
    }
    
    scrollPrev = scrollCurrent;
  });

  // Add custom styles for form validation
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .error {
      border-color: #f56565 !important;
      background-color: #fff5f5 !important;
    }
    
    .success-message {
      text-align: center;
      padding: 30px;
    }
    
    .success-message i {
      font-size: 3rem;
      color: var(--secondary-color);
      margin-bottom: 20px;
    }
    
    .success-message h3 {
      font-size: 1.5rem;
      margin-bottom: 16px;
    }
    
    .shadow {
      box-shadow: var(--shadow-md) !important;
    }
  `;
  document.head.appendChild(styleEl);
});
