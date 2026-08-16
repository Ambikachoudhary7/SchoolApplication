function toggleMobileMenu(event) {

    if (event) {
        event.stopPropagation();
    }

    const menu = document.querySelector(".nav-links");
    const button = document.querySelector(".menu-btn");
    const icon = button ? button.querySelector("i") : null;
    const overlay = document.getElementById("menuOverlay");

    if (!menu || !button) return;

    const isOpen = menu.classList.toggle("active-menu");

    if (overlay) {
        overlay.classList.toggle("active", isOpen);
    }

    if (isOpen) {

        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }

        button.setAttribute("aria-label", "Close Menu");

    } else {

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

        button.setAttribute("aria-label", "Open Menu");
    }
}


function closeMobileMenu() {

    const menu = document.querySelector(".nav-links");
    const button = document.querySelector(".menu-btn");
    const icon = button ? button.querySelector("i") : null;
    const overlay = document.getElementById("menuOverlay");

    if (menu) {
        menu.classList.remove("active-menu");
    }

    if (overlay) {
        overlay.classList.remove("active");
    }

    if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

    if (button) {
        button.setAttribute("aria-label", "Open Menu");
    }
}


document.addEventListener("DOMContentLoaded", function () {

    const overlay = document.getElementById("menuOverlay");

    if (overlay) {
        overlay.addEventListener("click", function () {
            closeMobileMenu();
        });
    }

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {
            closeMobileMenu();
        });

    });

});

const cards = document.querySelectorAll(".topper-card");

cards.forEach(card => {
    const overlay = card.querySelector(".hover-overlay");
    if (!overlay) return;

    card.addEventListener("mouseenter", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const top = y;
        const bottom = rect.height - y;
        const left = x;
        const right = rect.width - x;

        const min = Math.min(top, bottom, left, right);

        overlay.className = "hover-overlay";

        if (min === left) {
            overlay.classList.add("left");
        } else if (min === right) {
            overlay.classList.add("right");
        } else if (min === top) {
            overlay.classList.add("top");
        } else {
            overlay.classList.add("bottom");
        }

        requestAnimationFrame(() => {
            overlay.classList.add("show");
        });
    });

    card.addEventListener("mouseleave", () => {
        overlay.classList.remove("show");
    });
});

const newsData = {
    1: {
        date: "15 June, 2026",
        title: "Admissions Open for Session 2026–27",
        content: "Rose Public School is pleased to announce that admissions for the academic session 2026–27 are officially open for Pre-Nursery through Class 9. Parents can apply online through our registration portal or collect forms directly from the administration campus."
    },
    2: {
        date: "10 June, 2026",
        title: "Annual Inter-School Sports Meet",
        content: "Our annual sports festival will take place at the main athletic stadium next week. Events will feature track and field sprints, inter-house football matches, relay races, gymnastics, and award presentations."
    },
    3: {
        date: "05 June, 2026",
        title: "Science Exhibition Regional Winners",
        content: "Our Class 10 senior team secured 1st position in the Regional Science & Technology Exhibition with their project on self-sustaining solar irrigation and automated agricultural sensors."
    }
};

function openNewsModal(newsId) {
    const modal = document.getElementById("newsModal");
    const modalBody = document.getElementById("modalBody");

    if (!modal || !modalBody) return;

    if (newsId === 'all') {
        modalBody.innerHTML = `
            <span style="color: #1d4ed8; font-size: 13px; font-weight: 700; letter-spacing: 1px;">ANNOUNCEMENTS</span>
            <h2 style="font-size: 24px; color: #0f172a; margin: 8px 0 16px;">All News & Updates</h2>
            <ul style="line-height: 2; color: #64748b; padding-left: 18px;">
                <li><strong>15 June, 2026:</strong> Admissions Open for 2026–27</li>
                <li><strong>10 June, 2026:</strong> Annual Sports Meet 2026</li>
                <li><strong>05 June, 2026:</strong> Science Exhibition Winners</li>
                <li><strong>20 May, 2026:</strong> Summer Vacation Notice</li>
            </ul>
        `;
    } else if (newsData[newsId]) {
        const item = newsData[newsId];
        modalBody.innerHTML = `
            <span style="color: #1d4ed8; font-size: 13px; font-weight: 600;">
                <i class="fa-regular fa-calendar"></i> ${item.date}
            </span>
            <h2 style="font-size: 22px; color: #0f172a; margin: 10px 0 14px;">${item.title}</h2>
            <p style="color: #64748b; font-size: 15px; line-height: 1.7;">${item.content}</p>
        `;
    }

    modal.style.display = "flex";
}

function closeNewsModal() {
    const modal = document.getElementById("newsModal");
    if (modal) {
        modal.style.display = "none";
    }
}

window.addEventListener("click", function (e) {
    const modal = document.getElementById("newsModal");
    if (modal && e.target === modal) {
        modal.style.display = "none";
    }
});

window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeNewsModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');

        header.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
});

document.querySelector('.enquiry-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const admissionClass = document.getElementById('admissionClass').value;
    const parentName = document.getElementById('parentName').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const schoolWhatsAppNumber = "6205858139";

    const message = `*New Admission Enquiry*%0A%0A` +
        `*Student Name:* ${studentName}%0A` +
        `*Class:* ${admissionClass}%0A` +
        `*Parent Name:* ${parentName}%0A` +
        `*Address:* ${address}%0A` +
        `*Phone:* ${phone}%0A` +
        `*Email:* ${email}`;

    const whatsappURL = `https://wa.me/${schoolWhatsAppNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});

function applyFilter(button, category) {

    document.querySelectorAll(".filter-btn").forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    const cards = document.querySelectorAll(".gallery-card");

    cards.forEach(function (card) {

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}