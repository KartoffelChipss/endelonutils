const backgroundDiv = document.getElementById("kt_app_content");
if (backgroundDiv) backgroundDiv.style.backgroundImage = "none";

setInterval(() => {
    if (backgroundDiv) {
        const backgroundDiv = document.getElementById("kt_app_content");
        backgroundDiv.style.backgroundImage = "none";
    }
}, 1000)