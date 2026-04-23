const desktopNavBreakpoint = 1100;
const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
const mobileDropdowns = mobileMenu ? mobileMenu.querySelectorAll(".mobile-dropdown") : [];
const mobileDropdownToggles = mobileMenu ? mobileMenu.querySelectorAll(".mobile-dropdown-toggle") : [];
const revealElements = document.querySelectorAll(".reveal-left");
const revealRightElements = document.querySelectorAll(".reveal-right");
const revealUpElements = document.querySelectorAll(".reveal-up");
const alumniSlides = document.querySelectorAll(".alumni-slide");
const alumniDots = document.querySelectorAll(".alumni-dot");
const alumniCardSlides = document.querySelectorAll(".alumni-card-slide");
const alumniCardDots = document.querySelectorAll(".alumni-card-dot");
const contactForm = document.getElementById("contact-form");
const schoolAnswerRules = [
    {
        keywords: ["head master", "headmaster"],
        answer: "The Head Master listed on the website is Sabiti Dan.",
        links: [
            { href: "staff.html", label: "Staff Page" }
        ]
    },
    {
        keywords: ["director of studies", "dos"],
        answer: "The Director of Studies on the website is Ndungutse Bangirana Steven.",
        links: [
            { href: "staff.html", label: "Staff Page" }
        ]
    },
    {
        keywords: ["director of discipline"],
        answer: "The Director of Discipline on the website is Uwimana David.",
        links: [
            { href: "staff.html", label: "Staff Page" }
        ]
    },
    {
        keywords: ["founder", "who founded", "who is the founder"],
        answer: "Praise Academy was founded by Mutoni Monique in 2018.",
        links: [
            { href: "staff.html", label: "Staff Page" },
            { href: "academic-excellence.html", label: "Academic Excellence" }
        ]
    },
    {
        keywords: ["leaders", "leadership", "administration", "school leaders", "staff"],
        answer: "The school administration shown on the website includes founder Mutoni Monique, Pastor Georges Karake for spiritual leadership, Head Master Sabiti Dan, Director of Studies Ndungutse Bangirana Steven, and Director of Discipline Uwimana David.",
        links: [
            { href: "staff.html", label: "Staff Page" }
        ]
    },
    {
        keywords: ["where", "located", "location", "address", "map"],
        answer: "Praise Academy is located in Gasabo District, Ndera Sector, Masoro Cell.",
        links: [
            { href: "contactus.html", label: "Contact Us" }
        ]
    },
    {
        keywords: ["phone", "contact number", "call"],
        answer: "The phone numbers listed on the site are +250 788 559 614 and +250 788 207 251.",
        links: [
            { href: "contactus.html", label: "Contact Us" }
        ]
    },
    {
        keywords: ["email", "mail"],
        answer: "The school email listed on the website is info@praiseacademy.ac.rw.",
        links: [
            { href: "contactus.html", label: "Contact Us" }
        ]
    },
    {
        keywords: ["contact", "reach"],
        answer: "You can contact Praise Academy by phone at +250 788 559 614 or +250 788 207 251, by email at info@praiseacademy.ac.rw, or through the contact page on the website.",
        links: [
            { href: "contactus.html", label: "Contact Us" }
        ]
    },
    {
        keywords: ["fees", "fee", "tuition", "admission", "admissions", "enroll", "enrol", "register"],
        answer: "The website does not list school fees directly. For admissions, enrollment, or detailed school requirements, the best next step is to contact the school directly through the contact page.",
        links: [
            { href: "contactus.html", label: "Contact the School" }
        ]
    },
    {
        keywords: ["vision"],
        answer: "The school vision is to empower learners to acquire, demonstrate, articulate, and value knowledge that supports them as lifelong learners, guided by strong Christian values.",
        links: [
            { href: "academic-excellence.html", label: "Academic Excellence" }
        ]
    },
    {
        keywords: ["mission"],
        answer: "The mission of Praise Academy is to provide affordable quality education and develop young children with active and creative minds, with understanding and compassion for others.",
        links: [
            { href: "academic-excellence.html", label: "Academic Excellence" }
        ]
    },
    {
        keywords: ["history", "founded", "when founded", "when was the school founded"],
        answer: "Praise Academy was founded in 2018 by Mutoni Monique in Gasabo District, Ndera Sector, Masoro Cell to support children through quality Christian education rooted in strong values.",
        links: [
            { href: "academic-excellence.html", label: "Academic Excellence" }
        ]
    },
    {
        keywords: ["academic excellence"],
        answer: "The Academic Excellence page explains the school vision, mission, history, and how learners are formed through strong classroom foundations, whole-child development, and faith-guided learning.",
        links: [
            { href: "academic-excellence.html", label: "Academic Excellence" }
        ]
    },
    {
        keywords: ["primary section", "primary school"],
        answer: "The Primary Section page describes strong classroom learning, confidence and responsibility, Christian values in practice, academic support, reading culture, ICT exposure, and learning events such as study trips, presentations, group learning activities, research days, and achievement events.",
        links: [
            { href: "primary-section.html", label: "Primary Section" }
        ]
    },
    {
        keywords: ["what happens in primary", "primary learners", "events primary", "primary events", "study trip"],
        answer: "Primary learners take part in focused classroom learning and events such as study trips, academic presentations, group learning activities, research and discovery days, assessment and achievement events, and values and leadership activities.",
        links: [
            { href: "primary-section.html", label: "Primary Section" }
        ]
    },
    {
        keywords: ["nursery section", "nursery school", "early learning", "play based", "young learners"],
        answer: "The Nursery Section gives young children a caring and structured beginning through play-based learning, routines, creativity, social growth, and early values formation. It also includes mini study trips, music and recitation, celebration days, group learning moments, creativity days, and faith-based activities.",
        links: [
            { href: "nursery-section.html", label: "Nursery Section" }
        ]
    },
    {
        keywords: ["co curricular", "co curricular activities", "student life", "activities"],
        answer: "The Co Curricular Activities page explains how learners grow beyond the classroom through clubs, study trips, music and drama, sports and games, leadership activities, faith and values activities, team projects, and school participation.",
        links: [
            { href: "co-curricular-activities.html", label: "Co Curricular Activities" }
        ]
    },
    {
        keywords: ["clubs", "club"],
        answer: "The website presents clubs as part of the school’s co curricular life, helping learners discover interests, build confidence, practice teamwork, and grow through school participation beyond the classroom.",
        links: [
            { href: "co-curricular-activities.html", label: "Co Curricular Activities" }
        ]
    },
    {
        keywords: ["umuganda", "general cleanliness", "cleanliness"],
        answer: "Umuganda on the website is described as general cleanliness, where learners take part in keeping the school clean and beautiful while learning responsibility, cooperation, and care for the environment.",
        links: [
            { href: "co-curricular-activities.html", label: "Co Curricular Activities" }
        ]
    },
    {
        keywords: ["sports", "games"],
        answer: "Sports and games are part of the school’s student life and co curricular program. They help learners stay active, build discipline, enjoy teamwork, and grow in resilience and healthy competition.",
        links: [
            { href: "co-curricular-activities.html", label: "Co Curricular Activities" }
        ]
    },
    {
        keywords: ["ple", "primary leaving examination", "performance", "results"],
        answer: "The PLE Performance page presents the school’s PLE story through four completed intakes and is designed to show class-level result images and intake descriptions.",
        links: [
            { href: "ple-performance.html", label: "PLE Performance" }
        ]
    },
    {
        keywords: ["how many ple intakes", "four intakes", "intakes", "promotion", "promotions"],
        answer: "According to the PLE page, Praise Academy has so far had four completed PLE intakes from the school.",
        links: [
            { href: "ple-performance.html", label: "PLE Performance" }
        ]
    },
    {
        keywords: ["facilities", "library", "computer lab", "transport", "medical", "day care"],
        answer: "The website highlights facilities and support areas including day care, games and sports, the library, computer lab and academic technology support, transport services, and medical services.",
        links: [
            { href: "index.html#facilities", label: "Facilities" }
        ]
    },
    {
        keywords: ["gallery", "photos", "pictures", "images"],
        answer: "The gallery page shares school moments from learning, leadership, school events, celebrations, community life, and everyday experiences that tell the story of Praise Academy.",
        links: [
            { href: "gallery.html", label: "Gallery" }
        ]
    },
    {
        keywords: ["alumni", "testimonials", "former students", "voices"],
        answer: "The Alumni page includes testimonials from former learners and members of the Praise Academy community, sharing how the school shaped their confidence, discipline, faith, and growth.",
        links: [
            { href: "alumni.html", label: "Alumni" }
        ]
    },
    {
        keywords: ["donate", "donation", "support", "books", "construction", "student living"],
        answer: "The website invites support for Praise Academy through buying books, construction, and student living support. The donation guidance is provided on the Contact Us page.",
        links: [
            { href: "contactus.html", label: "Support the School" }
        ]
    },
    {
        keywords: ["social", "facebook", "instagram", "youtube"],
        answer: "Praise Academy also shares updates through Facebook, Instagram, and YouTube links listed in the footer across the website.",
        links: [
            { href: "index.html#footer", label: "Footer Links" }
        ]
    },
    {
        keywords: ["tell me about praise academy", "what is praise academy", "who are you"],
        answer: "Praise Academy is a Christian-based nursery and primary school committed to affordable quality education, academic excellence, discipline, and moral integrity. It was founded in 2018 by Mutoni Monique in Gasabo District, Ndera Sector, Masoro Cell.",
        links: [
            { href: "index.html#who-we-are", label: "Who We Are" },
            { href: "academic-excellence.html", label: "Academic Excellence" }
        ]
    }
];

function syncHeaderState() {
    if (!header) {
        return;
    }

    header.classList.toggle("scrolled", window.scrollY > 10);
}

function closeMobileMenu() {
    if (!menuToggle || !mobileMenu) {
        return;
    }

    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
    closeMobileDropdowns();
}

function toggleMobileMenu() {
    if (!menuToggle || !mobileMenu) {
        return;
    }

    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
}

function closeMobileDropdowns() {
    mobileDropdowns.forEach((dropdown) => {
        dropdown.classList.remove("is-open");
    });

    mobileDropdownToggles.forEach((toggle) => {
        toggle.setAttribute("aria-expanded", "false");
    });
}

function setupRevealAnimations() {
    const animatedElements = [...revealElements, ...revealRightElements, ...revealUpElements];

    if (!animatedElements.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        animatedElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
    });

    animatedElements.forEach((element) => observer.observe(element));
}

function setupAlumniSlider() {
    if (!alumniSlides.length || !alumniDots.length) {
        return;
    }

    let currentIndex = 0;
    let sliderTimer;

    function showSlide(index) {
        alumniSlides.forEach((slide, slideIndex) => {
            slide.classList.toggle("is-active", slideIndex === index);
        });

        alumniDots.forEach((dot, dotIndex) => {
            dot.classList.toggle("is-active", dotIndex === index);
        });

        currentIndex = index;
    }

    function startSlider() {
        sliderTimer = window.setInterval(() => {
            const nextIndex = (currentIndex + 1) % alumniSlides.length;
            showSlide(nextIndex);
        }, 5000);
    }

    function resetSlider() {
        window.clearInterval(sliderTimer);
        startSlider();
    }

    alumniDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            resetSlider();
        });
    });

    showSlide(0);
    startSlider();
}

function setupAlumniCardSlider() {
    if (!alumniCardSlides.length || !alumniCardDots.length) {
        return;
    }

    let currentIndex = 0;
    let sliderTimer;

    function showCard(index) {
        alumniCardSlides.forEach((slide, slideIndex) => {
            slide.classList.toggle("is-active", slideIndex === index);
        });

        alumniCardDots.forEach((dot, dotIndex) => {
            dot.classList.toggle("is-active", dotIndex === index);
        });

        currentIndex = index;
    }

    function startSlider() {
        sliderTimer = window.setInterval(() => {
            const nextIndex = (currentIndex + 1) % alumniCardSlides.length;
            showCard(nextIndex);
        }, 3000);
    }

    function resetSlider() {
        window.clearInterval(sliderTimer);
        startSlider();
    }

    alumniCardDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showCard(index);
            resetSlider();
        });
    });

    showCard(0);
    startSlider();
}

function setupContactForm() {
    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector(".submit-btn");
        const notification = document.getElementById("form-notification");
        const recipientEmail = contactForm.dataset.recipient;

        if (!submitButton || !notification || !recipientEmail) {
            return;
        }

        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        const formData = new FormData(contactForm);

        if (window.location.protocol !== "file:") {
            formData.set("_url", window.location.href);
        }

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: formData
            });

            const result = await response.json();

            if (!response.ok || (result.success !== true && result.success !== "true")) {
                throw new Error(result.message || "Failed to send message");
            }

            notification.textContent = "Thank you! Your message has been sent.";
            notification.className = "form-notification success";
            contactForm.reset();
        } catch (error) {
            const fallbackLink = `mailto:${recipientEmail}?subject=${encodeURIComponent("New Contact Inquiry from Praise Academy Website")}`;

            notification.innerHTML = `Sorry, there was an error sending your message. Please email us directly at <a href="${fallbackLink}">${recipientEmail}</a>.`;
            notification.className = "form-notification error";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;

            window.setTimeout(() => {
                notification.className = "form-notification";
                notification.textContent = "";
            }, 7000);
        }
    });
}

function normalizeChatText(value) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

function uniqueLinks(links) {
    const seen = new Set();

    return links.filter((link) => {
        if (seen.has(link.href)) {
            return false;
        }

        seen.add(link.href);
        return true;
    });
}

function buildChatbotAnswer(message) {
    const normalizedMessage = normalizeChatText(message);

    if (!normalizedMessage) {
        return {
            text: "Ask me about the school, academics, staff, facilities, contact details, co curricular activities, or PLE performance.",
            links: []
        };
    }

    if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(normalizedMessage)) {
        return {
            text: "Hello! I am the Praise Academy assistant. I can help with school information from this website, including staff, contact details, academics, facilities, student life, and PLE performance.",
            links: []
        };
    }

    if (/(thank you|thanks|thank)\b/.test(normalizedMessage)) {
        return {
            text: "You are welcome. If you want, you can also ask me about the staff, school contact details, academics, co curricular activities, or PLE performance.",
            links: []
        };
    }

    const matches = schoolAnswerRules
        .map((topic) => {
            let score = 0;

            topic.keywords.forEach((keyword) => {
                if (!normalizedMessage.includes(keyword)) {
                    return;
                }

                score += keyword.split(" ").length > 1 ? 4 : 2;
            });

            return {
                ...topic,
                score
            };
        })
        .filter((topic) => topic.score > 0)
        .sort((topicA, topicB) => topicB.score - topicA.score);

    if (!matches.length) {
        return {
            text: "I could not match that exactly, but I can help with school background, leadership, contact details, academics, nursery and primary sections, facilities, co curricular activities, donations, alumni, gallery content, and PLE performance.",
            links: [
                { href: "contactus.html", label: "Contact Us" },
                { href: "staff.html", label: "Staff" },
                { href: "academic-excellence.html", label: "Academic Excellence" }
            ]
        };
    }

    if (matches.length === 1 || matches[1].score < matches[0].score) {
        return {
            text: matches[0].answer,
            links: matches[0].links || []
        };
    }

    const topMatches = matches.slice(0, 2);
    const combinedText = topMatches.map((topic) => topic.answer).join(" ");
    const combinedLinks = uniqueLinks(topMatches.flatMap((topic) => topic.links || []));

    return {
        text: combinedText,
        links: combinedLinks
    };
}

function getChatbotIconMarkup() {
    return `
        <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
            <circle cx="36" cy="36" r="36" fill="#982220"></circle>
            <path d="M24 47c-5.5 0-10-4.5-10-10V29c0-5.5 4.5-10 10-10h24c5.5 0 10 4.5 10 10v8c0 5.5-4.5 10-10 10H38l-10 8v-8H24z" fill="#ffffff"></path>
            <circle cx="28.5" cy="33.5" r="3" fill="#982220"></circle>
            <circle cx="43.5" cy="33.5" r="3" fill="#982220"></circle>
            <rect x="33.5" y="11" width="5" height="8" rx="2.5" fill="#ffffff"></rect>
            <circle cx="36" cy="9" r="4" fill="#ffffff"></circle>
            <rect x="15" y="29" width="4" height="10" rx="2" fill="#f2d6d5"></rect>
            <rect x="53" y="29" width="4" height="10" rx="2" fill="#f2d6d5"></rect>
        </svg>
    `;
}

function getChatbotToggleMarkup(isOpen) {
    if (isOpen) {
        return `<span class="school-chatbot-close-icon" aria-hidden="true">&times;</span>`;
    }

    return `<span class="school-chatbot-icon">${getChatbotIconMarkup()}</span>`;
}

function setupSchoolChatbot() {
    const chatbotRoot = document.createElement("div");
    chatbotRoot.className = "school-chatbot";
    chatbotRoot.innerHTML = `
        <button class="school-chatbot-toggle" type="button" aria-expanded="false" aria-controls="school-chatbot-panel" aria-label="Open school chatbot">
            <span class="school-chatbot-toggle-visual">
                ${getChatbotToggleMarkup(false)}
            </span>
        </button>

        <section class="school-chatbot-panel" id="school-chatbot-panel" hidden aria-label="Praise Academy chatbot" style="width: min(24rem, calc(100vw - 2rem));">
            <div class="school-chatbot-header">
                <div class="school-chatbot-title-wrap">
                    <span class="school-chatbot-mini-icon">${getChatbotIconMarkup()}</span>
                    <div>
                        <strong>Praise Academy AI</strong>
                        <p>Ask me anything about the school.</p>
                    </div>
                </div>
                <button class="school-chatbot-close" type="button" aria-label="Close chatbot">&times;</button>
            </div>

            <div class="school-chatbot-messages" aria-live="polite"></div>

            <form class="school-chatbot-form">
                <label class="school-chatbot-label" for="school-chatbot-input">Ask a question</label>
                <div class="school-chatbot-input-wrap">
                    <input id="school-chatbot-input" class="school-chatbot-input" type="text" name="message"
                        placeholder="Ask about staff, contact, classes, clubs, PLE..." autocomplete="off">
                    <button class="school-chatbot-send" type="submit">Send</button>
                </div>
            </form>
        </section>
    `;

    document.body.append(chatbotRoot);

    const chatbotToggle = chatbotRoot.querySelector(".school-chatbot-toggle");
    const chatbotToggleVisual = chatbotRoot.querySelector(".school-chatbot-toggle-visual");
    const chatbotPanel = chatbotRoot.querySelector(".school-chatbot-panel");
    const chatbotClose = chatbotRoot.querySelector(".school-chatbot-close");
    const chatbotMessages = chatbotRoot.querySelector(".school-chatbot-messages");
    const chatbotForm = chatbotRoot.querySelector(".school-chatbot-form");
    const chatbotInput = chatbotRoot.querySelector(".school-chatbot-input");

    function syncChatbotToggle(isOpen) {
        chatbotRoot.classList.toggle("is-open", isOpen);
        chatbotPanel.hidden = !isOpen;
        chatbotPanel.style.display = isOpen ? "flex" : "none";
        chatbotPanel.setAttribute("aria-hidden", String(!isOpen));
        chatbotToggle.setAttribute("aria-expanded", String(isOpen));
        chatbotToggle.setAttribute("aria-label", isOpen ? "Close school chatbot" : "Open school chatbot");
        chatbotToggleVisual.innerHTML = getChatbotToggleMarkup(isOpen);
    }

    function scrollChatToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addChatMessage(role, content, allowHtml = false) {
        const message = document.createElement("article");
        message.className = `school-chatbot-message ${role === "user" ? "is-user" : "is-bot"}`;

        const bubble = document.createElement("div");
        bubble.className = "school-chatbot-bubble";

        if (allowHtml) {
            bubble.innerHTML = content;
        } else {
            bubble.innerHTML = escapeHtml(content);
        }

        message.append(bubble);
        chatbotMessages.append(message);
        scrollChatToBottom();
    }

    function renderChatLinks(links) {
        if (!links.length) {
            return "";
        }

        const linkMarkup = links
            .map((link) => `<a href="${link.href}" class="school-chatbot-link">${escapeHtml(link.label)}</a>`)
            .join("");

        return `<div class="school-chatbot-links">${linkMarkup}</div>`;
    }

    function respondToChat(message) {
        const answer = buildChatbotAnswer(message);
        const responseMarkup = `
            <p>${escapeHtml(answer.text)}</p>
            ${renderChatLinks(answer.links)}
        `;

        window.setTimeout(() => {
            addChatMessage("bot", responseMarkup, true);
        }, 220);
    }

    function openChatbot() {
        syncChatbotToggle(true);
        chatbotInput.focus();
    }

    function closeChatbot() {
        syncChatbotToggle(false);
    }

    chatbotToggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (chatbotRoot.classList.contains("is-open")) {
            closeChatbot();
            return;
        }

        openChatbot();
    });

    chatbotClose.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeChatbot();
    });

    chatbotForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const message = chatbotInput.value.trim();

        if (!message) {
            return;
        }

        addChatMessage("user", message);
        chatbotInput.value = "";
        respondToChat(message);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && chatbotRoot.classList.contains("is-open")) {
            closeChatbot();
        }
    });

    syncChatbotToggle(false);

    addChatMessage(
        "bot",
        "Hello! I am the Praise Academy AI assistant. Ask me about the school, staff, facilities, academics, student life, contact details, donations, alumni, or PLE performance."
    );
}

syncHeaderState();
setupRevealAnimations();
setupAlumniSlider();
setupAlumniCardSlider();
setupContactForm();
setupSchoolChatbot();

window.addEventListener("scroll", syncHeaderState, { passive: true });

if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
}

mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const dropdown = toggle.closest(".mobile-dropdown");
        const isOpen = dropdown ? dropdown.classList.contains("is-open") : false;

        closeMobileDropdowns();

        if (dropdown && !isOpen) {
            dropdown.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
        }
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > desktopNavBreakpoint) {
        closeMobileMenu();
    }
});
