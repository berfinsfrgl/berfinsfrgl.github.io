function openModal(title, videoUrl, description, buyUrl) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalVideo").src = videoUrl;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("buyLink").href = buyUrl;
  
    document.getElementById("gameModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modalVideo").src = "";
    document.getElementById("gameModal").style.display = "none";
  }
  