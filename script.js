// Отримуємо елементи
const orderBtn = document.getElementById("orderBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const copyBtn = document.getElementById("copyBtn");
const phoneNumber = document.getElementById("phoneNumber");

// Відображення модального вікна при натисканні на кнопку "Замовити зараз"
orderBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Закриття модального вікна при натисканні кнопки "Закрити"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закриття модального вікна при натисканні поза його межами
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Копіювання номера телефону
copyBtn.addEventListener("click", () => {
    // Перевіряємо наявність Clipboard API
    if (navigator.clipboard) {
        const phoneText = phoneNumber.textContent;

        // Використання Clipboard API
        navigator.clipboard.writeText(phoneText)
            .then(() => {
                alert("Номер скопійовано: " + phoneText);
            })
            .catch((err) => {
                alert("Помилка при копіюванні: " + err);
            });
    } 
});
