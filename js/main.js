document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', isActive);
            
            // Toggle hamburger animation
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (isActive) {
                spans[0].style.transform = 'translateY(7px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust for sticky header height (approx 80px)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Advanced Real-time Form Validation
    const form = document.getElementById('interest-form');
    if (form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // RFC 5322 standard email regex
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        const showError = (input, message) => {
            const errorElement = document.getElementById(`${input.id}-error`);
            input.classList.remove('success');
            input.classList.add('error');
            errorElement.textContent = message;
            errorElement.classList.add('visible');
            input.setAttribute('aria-invalid', 'true');
        };
        
        const showSuccess = (input) => {
            const errorElement = document.getElementById(`${input.id}-error`);
            input.classList.remove('error');
            input.classList.add('success');
            errorElement.textContent = '';
            errorElement.classList.remove('visible');
            input.setAttribute('aria-invalid', 'false');
        };

        const validateName = () => {
            const val = nameInput.value.trim();
            if (val === '') {
                showError(nameInput, 'Full name is required');
                return false;
            } else if (val.length < 2) {
                showError(nameInput, 'Name must be at least 2 characters long');
                return false;
            } else {
                showSuccess(nameInput);
                return true;
            }
        };

        const validateEmail = () => {
            const val = emailInput.value.trim();
            if (val === '') {
                showError(emailInput, 'Email address is required');
                return false;
            } else if (!emailRegex.test(val)) {
                showError(emailInput, 'Please enter a valid academic or professional email');
                return false;
            } else {
                showSuccess(emailInput);
                return true;
            }
        };

        const validateMessage = () => {
            const val = messageInput.value.trim();
            if (val === '') {
                showError(messageInput, 'Message is required');
                return false;
            } else if (val.length < 10) {
                showError(messageInput, 'Message must be at least 10 characters to provide full context');
                return false;
            } else {
                showSuccess(messageInput);
                return true;
            }
        };

        // Real-time listener checks
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        messageInput.addEventListener('input', validateMessage);
        
        // Add listener for blur to catch skipped fields
        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        messageInput.addEventListener('blur', validateMessage);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Re-validate everything on submit
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();
            
            if (isNameValid && isEmailValid && isMessageValid) {
                const btn = form.querySelector('.btn-submit');
                const originalText = btn.innerHTML;
                
                btn.innerHTML = 'Securely Authenticating...';
                btn.style.opacity = '0.7';
                btn.disabled = true;
                
                // Simulate secure network request
                setTimeout(() => {
                    btn.innerHTML = 'Interest Registered ✓';
                    btn.style.backgroundColor = '#10B981'; // Green color
                    btn.style.opacity = '1';
                    
                    form.reset();
                    
                    // Reset styling classes
                    nameInput.classList.remove('success');
                    emailInput.classList.remove('success');
                    messageInput.classList.remove('success');
                    
                    // Reset button after 3.5 seconds
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 3500);
                }, 1500);
            } else {
                // Focus on the first invalid element for accessibility
                if (!isNameValid) nameInput.focus();
                else if (!isEmailValid) emailInput.focus();
                else if (!isMessageValid) messageInput.focus();
            }
        });
    }

    // 4. Sticky Header Background Blur logic (Optional polish)
    // The CSS already handles backdrop-filter, but we can darken it on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 14, 20, 0.85)';
            header.style.backdropFilter = 'blur(16px)';
            header.style.webkitBackdropFilter = 'blur(16px)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            header.style.background = 'rgba(17, 24, 39, 0.5)';
            header.style.backdropFilter = 'blur(12px)';
            header.style.webkitBackdropFilter = 'blur(12px)';
            header.style.boxShadow = 'none';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }
    });

    // 5. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
    });
});
