// Fireworks effect
const launchFireworks = () => {
    const duration = 15 * 1000; // Fireworks for 15 seconds
    const end = Date.now() + duration;
  
    (function frame() {
      // Launch confetti
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };
  
  // Trigger fireworks on page load
  window.onload = () => {
    launchFireworks();
    countdown(); // Start the countdown
  };
  
  // Countdown function
  const countdown = () => {
    // Set the target date: November 29, 2024
    const birthday = new Date(2024, 10, 29); // Month is 0-indexed (10 = November)
    const now = new Date();
  
    // Calculate the difference
    const diff = birthday - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    // Update the DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  
    // Stop the countdown if the target date has passed
    if (diff < 0) {
      document.getElementById('countdown').innerHTML = "<h2>🎉 It's your Birthday! 🎂</h2>";
    }
  };
  
  // Update the countdown every second
  setInterval(countdown, 1000);
  