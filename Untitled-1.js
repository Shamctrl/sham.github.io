// script.js
function showAchievement(title, description) {
    const notification = document.getElementById('notification');
    notification.querySelector('h3').textContent = title;
    notification.querySelector('p').textContent = description;

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000); // Notification disappears after 5 seconds
}

// Example trigger
setTimeout(() => {
    showAchievement('Achievement Unlocked', 'Scored 100 points in a single match!');
}, 2000); // Trigger after 2 seconds
