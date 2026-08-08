const cards = document.querySelectorAll(".topper-card");

cards.forEach(card => {
    const overlay = card.querySelector(".hover-overlay");

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
        title: "Admissions Open for 2026–27",
        content: "Rose Public School is pleased to announce that admissions for the academic session 2026–27 are now officialy open for Pre-Nursery through Class 9. Parents can apply online through our portal or visit the campus administration office. Seats are allotted on a first-come, first-served basis."
    },
    2: {
        date: "10 June, 2026",
        title: "Annual Sports Meet 2026",
        content: "Our annual sports day is scheduled to take place at the main athletic stadium. Events will include track and field, inter-house football matches, relay races, and gymnastics displays. All parents and guardians are cordially invited to cheer for our young athletes."
    },
    3: {
        date: "05 June, 2026",
        title: "Science Exhibition Winners",
        content: "Our Class 10 senior science team secured 1st place in the Regional Inter-School Science & Tech Exhibition with their project on renewable energy and automated irrigation systems. Hearty congratulations to the winning team and their faculty mentors!"
    }
};


function openNewsModal(newsId) {
    const modal = document.getElementById("newsModal");
    const modalBody = document.getElementById("modalBody");

    if (newsId === 'all') {
        modalBody.innerHTML = `
            <span style="color: #1d4ed8; font-size: 14px; font-weight: 600;">ANNOUNCEMENTS</span>
            <h2 style="font-size: 28px; color: #0b1a30; margin: 10px 0 20px;">All News & Updates</h2>
            <ul style="line-height: 2; color: #64748b; padding-left: 20px;">
                <li><strong>15 June, 2026:</strong> Admissions Open for 2026–27</li>
                <li><strong>10 June, 2026:</strong> Annual Sports Meet 2026</li>
                <li><strong>05 June, 2026:</strong> Science Exhibition Winners</li>
                <li><strong>20 May, 2026:</strong> Summer Vacation Notice</li>
            </ul>
        `;
    } else if (newsData[newsId]) {
        const item = newsData[newsId];
        modalBody.innerHTML = `
            <span style="color: #1d4ed8; font-size: 14px; font-weight: 600;">
                <i class="fa-regular fa-calendar"></i> ${item.date}
            </span>
            <h2 style="font-size: 26px; color: #0b1a30; margin: 12px 0 16px;">${item.title}</h2>
            <p style="color: #64748b; font-size: 16px; line-height: 1.7;">${item.content}</p>
        `;
    }

    modal.style.display = "flex";
}

function closeNewsModal() {
    const modal = document.getElementById("newsModal");
    modal.style.display = "none";
}


window.addEventListener("click", function (e) {
    const modal = document.getElementById("newsModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const currentItem = this.parentElement;


            currentItem.classList.toggle('active');

            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });
        });
    });
});