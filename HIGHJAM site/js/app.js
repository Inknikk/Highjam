
        // Navigation functionality
        const toggleBtn = document.querySelector('.toggle-btn');
        const toggleBtnIcon = document.querySelector('.toggle-btn i');
        const dropDownMenu = document.querySelector('.dropdown-menu');
        
        function closeDropdownMenu() {
            dropDownMenu.classList.remove('open');
            toggleBtnIcon.classList = "fa-solid fa-bars";
        }
        
        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');
            toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
        };
        
        // Close dropdown when clicking on links
        const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
        dropdownLinks.forEach(function (link) {
            link.addEventListener('click', closeDropdownMenu);
        });
        
        // Testimonial functionality
        let userTexts = document.getElementsByClassName("user-text");
        let userPics = document.getElementsByClassName("user-pic");
        
        function showReview() {
            for (userPic of userPics) {
                userPic.classList.remove("active-pic");
            }
            for (userText of userTexts) {
                userText.classList.remove("active-text");
            }
            
            let i = Array.from(userPics).indexOf(event.target);
            
            userPics[i].classList.add("active-pic");
            userTexts[i].classList.add("active-text");
        }
        
        // FAQ accordion functionality
        const buttons = document.querySelectorAll('.question button');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const faq = button.nextElementSibling;
                const icon = button.children[1];
                
                faq.classList.toggle('show');
                icon.classList.toggle('rotate');
            });
        });
        
        // Scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });
        
        // Observe elements for scroll animations
        document.querySelectorAll('.hero-text-content, .feature-card, .service-card, .license').forEach((el) => {
            el.classList.add('hidden-scroll');
            observer.observe(el);
        });
    