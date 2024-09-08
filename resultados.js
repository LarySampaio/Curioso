function copyCode() {
  showNotification("Código copiado para a área de transferência!");

  setTimeout(() => {
    const notification = document.getElementById("notification");
    notification.classList.remove("show");
  }, 1000);
}

function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");
}
