const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');
const body = document.body;

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});



document.addEventListener("DOMContentLoaded", () => {
    // モーダルの開閉
    const openButtons = document.querySelectorAll(".openButton");
    const closeButtons = document.querySelectorAll(".closeButton");
    const modals = document.querySelectorAll(".modal");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // タイムスタンプ設定
    const timestampInput = document.querySelector('input[name="timestamp"]');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }
});

