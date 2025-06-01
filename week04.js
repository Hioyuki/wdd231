const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');
const body = document.body;

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});






document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".openButton");
    const closeButtons = document.querySelectorAll(".closeButton");
    const modals = document.querySelectorAll(".modal");

    // モーダルを開く
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const modal = document.getElementById(targetId);
            if (modal) modal.style.display = "block";
        });
    });

    // モーダルを閉じる（×ボタンもCloseボタンも同じクラスなので対応）
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            if (modal) modal.style.display = "none";
        });
    });

    // モーダルの外側クリックで閉じる
    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded",function(){
    const timestampInput = document.querySelector('input[name="timestamp"]');
    if(timestampInput) {
        timestampInput.value = new Date().toISOString();
    }
});