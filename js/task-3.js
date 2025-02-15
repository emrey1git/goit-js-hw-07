const nameInput = document.querySelector("#name-input"); // Input'u seç
const nameOutput = document.querySelector("#name-output"); // Span'i seç

nameInput.addEventListener("input", () => { // Kullanıcı her yazdığında çalışır
  const name = nameInput.value.trim(); // Girilen değeri al ve boşlukları temizle
  nameOutput.textContent = name ? name : "Anonymous"; // Boşsa 'Anonymous' yaz
});
