// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}


// ================= CLOSE MOBILE MENU =================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});


// ================= TYPING ANIMATION =================

const typingText = document.getElementById("typing-text");

const words = [
    "Data Science Enthusiast",
    "Machine Learning Developer",
    "Python Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentWord = words[wordIndex];


    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }


    const typingSpeed = isDeleting ? 60 : 100;

    setTimeout(typeEffect, typingSpeed);
}


typeEffect();


// ================= THEME TOGGLE =================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");


        if (document.body.classList.contains("light-theme")) {
            themeToggle.textContent = "🌙";
        } else {
            themeToggle.textContent = "☀️";
        }

    });

}

// =====================================================
// AI ASSISTANT CHAT
// =====================================================

const aiAssistantBtn =
    document.getElementById("aiAssistantBtn");

const aiChatWindow =
    document.getElementById("aiChatWindow");

const aiCloseBtn =
    document.getElementById("aiCloseBtn");


/* Open AI Chat */

if (aiAssistantBtn && aiChatWindow) {

    aiAssistantBtn.addEventListener("click", () => {

        aiChatWindow.classList.toggle("show");

    });

}


/* Close AI Chat */

if (aiCloseBtn && aiChatWindow) {

    aiCloseBtn.addEventListener("click", () => {

        aiChatWindow.classList.remove("show");

    });

}
// =====================================================
// AI CHAT - FRONTEND MESSAGE SYSTEM
// =====================================================

const aiChatBody =
    document.getElementById("aiChatBody");

const aiMessageInput =
    document.getElementById("aiMessageInput");

const aiSendBtn =
    document.getElementById("aiSendBtn");

const quickQuestions =
    document.querySelectorAll(".quick-question");


// =====================================================
// ADD USER MESSAGE
// =====================================================

function addUserMessage(message) {

    const messageDiv =
        document.createElement("div");

    messageDiv.className =
        "user-message";


    messageDiv.innerHTML = `
        <div class="user-message-content">
            ${escapeHTML(message)}
        </div>
    `;


    aiChatBody.appendChild(messageDiv);

    scrollChatToBottom();
}


// =====================================================
// ADD AI MESSAGE
// =====================================================

function addAIMessage(message) {

    const messageDiv =
        document.createElement("div");

    messageDiv.className =
        "ai-message";


    messageDiv.innerHTML = `
        <div class="message-avatar">
            🤖
        </div>

        <div class="message-content">
            <p>${escapeHTML(message)}</p>
        </div>
    `;


    aiChatBody.appendChild(messageDiv);

    scrollChatToBottom();
}


// =====================================================
// SIMPLE FRONTEND RESPONSE
// =====================================================

function getTemporaryResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("skill") ||
        text.includes("skills")
    ) {

        return "Ramakant works with Python, Java, JavaScript, HTML, CSS, Flask, Machine Learning, AI/ML and other modern development technologies.";

    }


    if (
        text.includes("project") ||
        text.includes("projects")
    ) {

        return "Ramakant has worked on projects including GenAI Content Co-Pilot and AI Sign Language Detection.";

    }


    if (
        text.includes("education") ||
        text.includes("study") ||
        text.includes("college")
    ) {

        return "Ramakant is pursuing B.Tech in Computer Science and Engineering.";

    }


    if (
        text.includes("resume") ||
        text.includes("cv")
    ) {

        return "You can view or download Ramakant's resume from the Resume section of this portfolio.";

    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Hello! 👋 I'm RK AI. Ask me about Ramakant's skills, projects, education or resume.";

    }


    return "Thanks for your question! 🤖 I'm currently a portfolio assistant. Soon I'll be connected with Gemini AI so I can give more detailed answers.";

}


// =====================================================
// SEND MESSAGE
// =====================================================

function sendAIMessage() {

    if (!aiMessageInput || !aiChatBody) {
        return;
    }


    const message =
        aiMessageInput.value.trim();


    if (message === "") {
        return;
    }


    // Add user message

    addUserMessage(message);


    // Clear input

    aiMessageInput.value = "";


    // Temporary AI response

    setTimeout(() => {

        const response =
            getTemporaryResponse(message);

        addAIMessage(response);

    }, 500);
}


// =====================================================
// SEND BUTTON
// =====================================================

if (aiSendBtn) {

    aiSendBtn.addEventListener(
        "click",
        sendAIMessage
    );

}


// =====================================================
// ENTER KEY
// =====================================================

if (aiMessageInput) {

    aiMessageInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                sendAIMessage();

            }

        }
    );

}


// =====================================================
// QUICK QUESTIONS
// =====================================================

quickQuestions.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const question =
                button.textContent.trim();


            aiMessageInput.value =
                question;


            sendAIMessage();

        }
    );

});


// =====================================================
// SCROLL CHAT
// =====================================================

function scrollChatToBottom() {

    if (!aiChatBody) {
        return;
    }


    aiChatBody.scrollTop =
        aiChatBody.scrollHeight;

}


// =====================================================
// SECURITY
// =====================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async (event) => {

            // Stop normal page redirect
            event.preventDefault();


            const name =
                document
                    .getElementById("contactName")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("contactEmail")
                    .value
                    .trim();

            const message =
                document
                    .getElementById("contactMessage")
                    .value
                    .trim();


            // Clear previous status

            formStatus.textContent = "";
            formStatus.className = "form-status";


            // Empty field validation

            if (!name || !email || !message) {

                formStatus.textContent =
                    "Please fill in all fields.";

                formStatus.classList.add("error");

                return;
            }


            // Email validation

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                formStatus.textContent =
                    "Please enter a valid email address.";

                formStatus.classList.add("error");

                return;
            }


            // Show sending message

            formStatus.textContent =
                "Sending message...";

            formStatus.classList.add("success");


            try {

                const formData =
                    new FormData(contactForm);


                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Accept": "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    formStatus.textContent =
                        `Thanks ${name}! Your message has been sent successfully. 📩`;

                    formStatus.className =
                        "form-status success";

                    contactForm.reset();

                } else {

                    formStatus.textContent =
                        "Something went wrong. Please try again.";

                    formStatus.className =
                        "form-status error";
                }


            } catch (error) {

                formStatus.textContent =
                    "Unable to send message. Please try again.";

                formStatus.className =
                    "form-status error";

                console.error(
                    "Formspree error:",
                    error
                );

            }

        }
    );

}
// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-container, " +
        ".skills-grid, " +
        ".projects-grid, " +
        ".education-card, " +
        ".certificate-card, " +
        ".achievement-card, " +
        ".resume-container, " +
        ".contact-container, " +
        ".footer"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
// =====================================================
// NAVBAR ACTIVE SECTION ON SCROLL
// =====================================================

const sections = document.querySelectorAll("section[id]");
const navbarLinks = document.querySelectorAll(".nav-link");

const activeSectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navbarLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${currentId}`
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
    }
);


sections.forEach((section) => {
    activeSectionObserver.observe(section);
});