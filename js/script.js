// Car Classification Functionality
function initializeCarClassification() {
    const yearFilter = document.getElementById('year-filter');
    const availabilityFilter = document.getElementById('availability-filter');
    const resetButton = document.getElementById('reset-filters');
    const resultsContainer = document.getElementById('classification-results');

    // Extract unique years and sort them
    const years = [...new Set(carsData.map(car => car.year))].sort((a, b) => b - a);
    
    // Populate year filter
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    // Function to filter cars based on selected filters
    function filterCars() {
        const selectedYear = yearFilter.value;
        const selectedAvailability = availabilityFilter.value;

        const filteredCars = carsData.filter(car => {
            const yearMatch = selectedYear === 'all' || car.year.toString() === selectedYear;
            const availabilityMatch = selectedAvailability === 'all' || car.availability === selectedAvailability;
            return yearMatch && availabilityMatch;
        });

        displayResults(filteredCars);
    }

    // Function to display filtered results
    function displayResults(cars) {
        resultsContainer.innerHTML = '';

        if (cars.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">Nu s-au găsit mașini care să corespundă criteriilor selectate.</div>';
            return;
        }

        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            
            const availabilityClass = car.availability === 'disponibila' ? 'available' : 'rented';
            const availabilityText = car.availability === 'disponibila' ? 'Disponibilă' : 'Închiriată';
            
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.model}" class="car-image">
                <div class="car-details">
                    <h3>${car.model}</h3>
                    <div class="car-meta">
                        <span>An: ${car.year}</span>
                        <span class="availability ${availabilityClass}">${availabilityText}</span>
                    </div>
                </div>
            `;
            
            resultsContainer.appendChild(carCard);
        });
    }

    // Event listeners
    yearFilter.addEventListener('change', filterCars);
    availabilityFilter.addEventListener('change', filterCars);
    
    resetButton.addEventListener('click', () => {
        yearFilter.value = 'all';
        availabilityFilter.value = 'all';
        filterCars();
    });

    // Initial display of all cars
    filterCars();
}

// Initialize car classification when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('classification-results')) {
        initializeCarClassification();
    }
});

// Car Data and Filtering
const carsData = [
    { id: 1, year: 1965, model: 'Ford Mustang', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 2, year: 1957, model: 'Chevrolet Bel Air', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 3, year: 1969, model: 'Dodge Charger', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 4, year: 1967, model: 'Chevrolet Camaro', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 5, year: 1959, model: 'Cadillac Eldorado', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 6, year: 1968, model: 'Plymouth Road Runner', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 7, year: 1964, model: 'Ford Thunderbird', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 8, year: 1966, model: 'Pontiac GTO', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 9, year: 1970, model: 'Chevrolet Chevelle SS', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 10, year: 1963, model: 'Corvette Sting Ray', availability: 'disponibila', image: 'images/p1.jpg' },
    // Adding more cars to reach 50
    { id: 11, year: 1962, model: 'Jaguar E-Type', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 12, year: 1955, model: 'Mercedes-Benz 300SL', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 13, year: 1961, model: 'Ferrari 250 GT', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 14, year: 1967, model: 'Shelby GT500', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 15, year: 1956, model: 'Chevrolet Nomad', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 16, year: 1969, model: 'Plymouth Barracuda', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 17, year: 1971, model: 'Dodge Challenger', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 18, year: 1964, model: 'Pontiac Tempest', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 19, year: 1958, model: 'Chevrolet Impala', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 20, year: 1965, model: 'Shelby Cobra', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 21, year: 1970, model: 'Plymouth Hemi Cuda', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 22, year: 1966, model: 'Oldsmobile Toronado', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 23, year: 1963, model: 'Studebaker Avanti', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 24, year: 1957, model: 'BMW 507', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 25, year: 1968, model: 'AMC AMX', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 26, year: 1962, model: 'Lincoln Continental', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 27, year: 1971, model: 'De Tomaso Pantera', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 28, year: 1967, model: 'Toyota 2000GT', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 29, year: 1959, model: 'Austin-Healey 3000', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 30, year: 1964, model: 'Buick Riviera', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 31, year: 1970, model: 'Datsun 240Z', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 32, year: 1965, model: 'Alfa Romeo Giulia', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 33, year: 1956, model: 'Ford Thunderbird', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 34, year: 1969, model: 'Chevrolet Nova SS', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 35, year: 1963, model: 'Jaguar XKE', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 36, year: 1971, model: 'Plymouth Duster', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 37, year: 1967, model: 'Pontiac Firebird', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 38, year: 1958, model: 'Chevrolet Corvette', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 39, year: 1966, model: 'Shelby GT350', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 40, year: 1964, model: 'Ford Galaxie 500', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 41, year: 1970, model: 'Dodge Super Bee', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 42, year: 1965, model: 'Pontiac GTO', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 43, year: 1962, model: 'Chevrolet Corvair', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 44, year: 1968, model: 'Mercury Cougar', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 45, year: 1957, model: 'Fiat 500', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 46, year: 1969, model: 'Chevrolet Chevelle', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 47, year: 1963, model: 'Studebaker Lark', availability: 'disponibila', image: 'images/p2.jpg' },
    { id: 48, year: 1971, model: 'AMC Javelin', availability: 'inchiriata', image: 'images/p3.jpeg' },
    { id: 49, year: 1967, model: 'Plymouth GTX', availability: 'disponibila', image: 'images/p1.jpg' },
    { id: 50, year: 1960, model: 'Volkswagen Beetle', availability: 'disponibila', image: 'images/p2.jpg' }
];

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact buttons functionality
    const contactButtons = document.querySelectorAll('.contact-actions a');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect on click
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature, .contact-item, .about-text');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, rgba(44, 62, 80, 0.95) 0%, rgba(52, 73, 94, 0.95) 100%)';
        } else {
            header.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
        }
    });
});

// Form validation function
function validateForm(data) {
    const requiredFields = ['nume', 'email', 'telefon', 'tip', 'data'];
    const errors = [];

    // Check required fields
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(`Câmpul ${field} este obligatoriu.`);
        }
    });

    // Validate email
    if (data.email && !isValidEmail(data.email)) {
        errors.push('Adresa de email nu este validă.');
    }

    // Validate phone
    if (data.telefon && !isValidPhone(data.telefon)) {
        errors.push('Numărul de telefon nu este valid.');
    }

    // Validate date (must be in the future)
    if (data.data) {
        const selectedDate = new Date(data.data);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate <= today) {
            errors.push('Data evenimentului trebuie să fie în viitor.');
        }
    }

    // Show errors if any
    if (errors.length > 0) {
        showFormMessage(errors.join('<br>'), 'error');
        return false;
    }

    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation (Romanian format)
function isValidPhone(phone) {
    const phoneRegex = /^(\+40|0)[0-9]{9}$/;
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    return phoneRegex.test(cleanPhone);
}

// Show form messages
function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = message;

    // Style the message
    messageDiv.style.cssText = `
        padding: 15px;
        margin: 20px 0;
        border-radius: 5px;
        font-weight: 500;
        text-align: center;
        animation: slideIn 0.3s ease;
    `;

    if (type === 'success') {
        messageDiv.style.background = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
    } else {
        messageDiv.style.background = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
    }

    // Insert message after form
    const form = document.querySelector('.form');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);

    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                messageDiv.remove();
            }, 300);
        }
    }, 5000);
}

function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = message;

    // Style the message
    messageDiv.style.cssText = `
        padding: 15px;
        margin: 20px 0;
        border-radius: 5px;
        font-weight: 500;
        text-align: center;
        animation: slideIn 0.3s ease;
    `;

    if (type === 'success') {
        messageDiv.style.background = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
    } else {
        messageDiv.style.background = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
    }

    // Insert message after form or in the form message container
    const form = document.getElementById('contact-form');
    const formMessageContainer = document.getElementById('form-message');
    
    if (formMessageContainer) {
        formMessageContainer.appendChild(messageDiv);
    } else if (form) {
        form.parentNode.insertBefore(messageDiv, form.nextSibling);
    } else {
        // If neither exists, append to body
        document.body.appendChild(messageDiv);
    }

    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 300);
        }
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = 'Se trimite...';
            submitButton.disabled = true;
            const formMessage = document.getElementById('form-message');
            
            // Get form data
            const formData = {
                nume: document.getElementById('nume').value,
                email: document.getElementById('email').value,
                telefon: document.getElementById('telefon').value,
                tip: document.getElementById('tip').value,
                data: document.getElementById('data').value,
                mesaj: document.getElementById('mesaj').value || 'Nu s-a furnizat niciun mesaj suplimentar.'
            };
            
            // Validate form
            if (!validateForm(formData)) {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                return;
            }
            
            // Send email using EmailJS
            emailjs.send('service_dwj90ug', 'template_akn0mzh', {
                from_name: formData.nume,
                from_email: formData.email,
                phone: formData.telefon,
                event_type: formData.tip,
                event_date: formData.data,
                message: formData.mesaj,
                to_email: 'clevaflorin@gmail.com', // Replace with your email
                subject: `Cerere nouă de la ${formData.nume}`
            }, '0YkLVhcwy7EaYZuPW')
            .then(function() {
                showFormMessage('Mesajul tău a fost trimis cu succes! Te vom contacta în curând.', 'success');
                contactForm.reset();
            }, function(error) {
                console.error('Eroare la trimiterea mesajului:', error);
                showFormMessage('A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou mai târziu.', 'error');
            })
            .finally(() => {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
});

// Add EmailJS initialization
(function() {
    emailjs.init('0YkLVhcwy7EaYZuPW'); // Replace with your public key
})();s

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }

    .form-message {
        position: relative;
        z-index: 1000;
    }
`;
document.head.appendChild(style);

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
