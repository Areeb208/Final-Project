const faqItems = document.querySelectorAll(".faq-item");
const modal = document.getElementById("faqModal");
const modalQuestion = document.querySelector(".faq-modal-question");
const modalAnswer = document.querySelector(".faq-modal-answer");
const closeBtn = document.querySelector(".faq-close");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const question = item.querySelector(".faq-question").textContent;
        const answer = item.getAttribute("data-answer");
        modalQuestion.textContent = question;
        modalAnswer.textContent = answer; modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) { modal.style.display = "none"; }
});