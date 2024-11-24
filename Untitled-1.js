// Function to show the notification
function showNotification(name, desc) {
    const notification = document.getElementById("notification");
    const sound = document.getElementById("notification-sound");

    // Set custom text
    document.getElementById("achievement-name").textContent = name;
    document.getElementById("achievement-desc").textContent = desc;

    // Play sound and show notification
    sound.play();
    notification.style.opacity = "1";
    notification.style.transform = "translateY(0)";

    // Hide after 5 seconds
    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transform = "translateY(50px)";
    }, 5000);
}

// Trigger a test notification
setTimeout(() => {
    showNotification("Rare Achievement Unlocked!", "You reached 100 viewers!");
}, 2000);
