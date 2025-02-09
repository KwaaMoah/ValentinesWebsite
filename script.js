document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Yay! I'm the luckiest person in the world! 💖";
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "I'll keep trying until you say yes! 😉";
});