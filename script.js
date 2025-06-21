document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("number-display");
  const button = document.getElementById("generate-btn");

  button.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    
    // Add animation effect
    display.classList.remove("pop");
    void display.offsetWidth; // Trigger reflow for animation restart
    display.classList.add("pop");

    display.textContent = randomNum;
  });
});

// Add temporary pop animation on number change
const style = document.createElement("style");
style.innerHTML = `
  .pop {
    animation: pop 0.3s ease;
  }

  @keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);
