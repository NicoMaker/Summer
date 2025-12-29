console.log("🌊 Buona Estate 2024! 🏖️ ☀️");

const scene = document.querySelector(".summer-scene");

// Summer themed elements for particles
const summerElements = [
  "🐚", "⭐", "🌊", "☀️", "🦀", "🐠", "🍹", "🥥", 
  "🌺", "🪼", "🐡", "⚓", "🐬", "🌴", "✨", "💎"
];

// Generate magical floating particles
function generateFloatingParticles() {
  for (let i = 0; i < 120; i++) {
    const particle = document.createElement("div");
    particle.className = "floating-particle";
    particle.style.position = "absolute";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "15";
    particle.style.fontSize = Math.random() * 25 + 20 + "px";
    particle.textContent = summerElements[Math.floor(Math.random() * summerElements.length)];
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.opacity = Math.random() * 0.4 + 0.2;
    
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    
    particle.style.animation = `particleFloat ${duration}s ease-in-out infinite`;
    particle.style.animationDelay = delay + "s";
    particle.style.willChange = "transform";

    scene.appendChild(particle);
  }
}

// Add particle animations to stylesheet
const particleStyle = document.createElement("style");
particleStyle.textContent = `
  @keyframes particleFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0.3;
    }
    25% {
      transform: translate(40px, -60px) rotate(90deg);
      opacity: 0.6;
    }
    50% {
      transform: translate(-30px, -120px) rotate(180deg);
      opacity: 0.4;
    }
    75% {
      transform: translate(50px, -60px) rotate(270deg);
      opacity: 0.7;
    }
  }
  
  .floating-particle {
    will-change: transform;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
  }
`;
document.head.appendChild(particleStyle);

// Generate particles on load
generateFloatingParticles();

// Smooth parallax scrolling effect
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;

      // Parallax for sun with enhanced effect
      const sunContainer = document.querySelector(".sun-container");
      if (sunContainer) {
        sunContainer.style.transform = `translateY(${scrolled * 0.25}px) rotate(${scrolled * 0.05}deg)`;
      }

      // Parallax for clouds with different speeds
      const clouds = document.querySelectorAll(".cloud");
      clouds.forEach((cloud, index) => {
        const speed = 0.3 + (index * 0.1);
        cloud.style.transform = `translateY(${scrolled * speed}px) translateX(${scrolled * 0.08 * (index + 1)}px)`;
      });

      // Parallax for boats with rocking motion
      const boats = document.querySelectorAll(".boat");
      boats.forEach((boat, index) => {
        boat.style.transform = `translateY(${scrolled * 0.12}px) rotate(${Math.sin(scrolled * 0.01 + index) * 6}deg)`;
      });

      // Parallax for island
      const island = document.querySelector(".island");
      if (island) {
        island.style.transform = `translateX(-50%) translateY(${scrolled * 0.15}px)`;
      }

      // Parallax for underwater creatures
      const creatures = document.querySelectorAll(".sea-creature");
      creatures.forEach((creature, index) => {
        creature.style.transform = `translateY(${scrolled * (0.1 + index * 0.02)}px)`;
      });

      ticking = false;
    });

    ticking = true;
  }
});

// Create underwater bubbles
function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "underwater-bubble";
  bubble.style.position = "absolute";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.bottom = "0%";
  
  const size = Math.random() * 35 + 15;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  
  bubble.style.background = "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.7), rgba(150, 220, 255, 0.4))";
  bubble.style.borderRadius = "50%";
  bubble.style.pointerEvents = "none";
  bubble.style.zIndex = "25";
  bubble.style.boxShadow = "0 0 15px rgba(150, 220, 255, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.4)";
  
  const duration = Math.random() * 8 + 6;
  const drift = Math.random() * 150 - 75;
  
  bubble.style.animation = `bubbleRise ${duration}s linear`;
  bubble.style.setProperty('--drift', drift + 'px');

  scene.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, duration * 1000);
}

// Add bubble rise animation
const bubbleStyle = document.createElement("style");
bubbleStyle.textContent = `
  @keyframes bubbleRise {
    0% {
      bottom: 0%;
      opacity: 0;
      transform: translateX(0px) scale(0.5);
    }
    10% {
      opacity: 0.9;
      transform: translateX(calc(var(--drift) * 0.2)) scale(1);
    }
    50% {
      transform: translateX(calc(var(--drift) * 0.6)) scale(1.1);
    }
    90% {
      opacity: 0.8;
      transform: translateX(var(--drift)) scale(0.9);
    }
    100% {
      bottom: 100%;
      opacity: 0;
      transform: translateX(var(--drift)) scale(0.5);
    }
  }
  
  .underwater-bubble {
    will-change: transform, opacity;
  }
`;
document.head.appendChild(bubbleStyle);

// Create bubbles periodically with varying frequency
setInterval(createBubble, 400);
setInterval(createBubble, 600);

// Create sparkles near treasure
function createTreasureSparkle() {
  const treasure = document.querySelector(".treasure");
  if (!treasure) return;

  const sparkle = document.createElement("div");
  sparkle.textContent = "✨";
  sparkle.style.position = "absolute";
  sparkle.style.fontSize = Math.random() * 30 + 20 + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "55";
  
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 150 + 50;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  sparkle.style.animation = "sparkleExpand 1.5s ease-out";

  treasure.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1500);
}

const sparkleExpandStyle = document.createElement("style");
sparkleExpandStyle.textContent = `
  @keyframes sparkleExpand {
    0% {
      opacity: 1;
      transform: scale(0) rotate(0deg);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.2) rotate(180deg);
    }
    100% {
      opacity: 0;
      transform: scale(0.5) rotate(360deg);
    }
  }
`;
document.head.appendChild(sparkleExpandStyle);

// Generate treasure sparkles
setInterval(createTreasureSparkle, 800);

// Add interactive hover effects for beach items
const beachItems = document.querySelectorAll(".beach-item");
beachItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.2) translateY(-30px) rotate(10deg)";
    item.style.transition = "transform 0.3s ease";
  });
  
  item.addEventListener("mouseleave", () => {
    item.style.transform = "";
    item.style.transition = "transform 0.3s ease";
  });
});

// Add click effect for flowers
const flowers = document.querySelectorAll(".flower");
flowers.forEach(flower => {
  flower.addEventListener("click", () => {
    flower.style.animation = "none";
    setTimeout(() => {
      flower.style.animation = "";
    }, 10);
    
    // Create petal burst
    for (let i = 0; i < 6; i++) {
      const petal = document.createElement("div");
      petal.textContent = "🌸";
      petal.style.position = "absolute";
      petal.style.fontSize = "30px";
      petal.style.pointerEvents = "none";
      petal.style.left = "50%";
      petal.style.top = "50%";
      petal.style.zIndex = "100";
      
      const angle = (Math.PI * 2 * i) / 6;
      const distance = 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      petal.style.animation = `petalBurst 1s ease-out`;
      petal.style.setProperty('--petal-x', x + 'px');
      petal.style.setProperty('--petal-y', y + 'px');
      
      flower.appendChild(petal);
      
      setTimeout(() => {
        petal.remove();
      }, 1000);
    }
  });
});

const petalStyle = document.createElement("style");
petalStyle.textContent = `
  @keyframes petalBurst {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(calc(-50% + var(--petal-x)), calc(-50% + var(--petal-y))) scale(0.5) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(petalStyle);

// Add wave splash effect when clicking on ocean
const oceanSurface = document.querySelector(".ocean-surface");
if (oceanSurface) {
  oceanSurface.addEventListener("click", (e) => {
    const splash = document.createElement("div");
    splash.textContent = "💦";
    splash.style.position = "absolute";
    splash.style.left = e.clientX + "px";
    splash.style.top = e.clientY + "px";
    splash.style.fontSize = "60px";
    splash.style.pointerEvents = "none";
    splash.style.zIndex = "100";
    splash.style.animation = "splashEffect 0.8s ease-out";
    
    scene.appendChild(splash);
    
    setTimeout(() => {
      splash.remove();
    }, 800);
  });
}

const splashStyle = document.createElement("style");
splashStyle.textContent = `
  @keyframes splashEffect {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 0;
    }
  }
`;
document.head.appendChild(splashStyle);

// Animate light rays with mouse movement
document.addEventListener("mousemove", (e) => {
  const rays = document.querySelectorAll(".light-ray");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = (e.clientX - centerX) / centerX;
  const deltaY = (e.clientY - centerY) / centerY;
  
  rays.forEach((ray, index) => {
    const offset = (index - rays.length / 2) * 15;
    ray.style.transform = `rotate(${offset + deltaX * 10}deg)`;
  });
});

// Add random fish swimming across screen
function createSwimmingFish() {
  const fishTypes = ["🐟", "🐠", "🐡", "🦈"];
  const fish = document.createElement("div");
  fish.textContent = fishTypes[Math.floor(Math.random() * fishTypes.length)];
  fish.style.position = "absolute";
  fish.style.fontSize = Math.random() * 40 + 40 + "px";
  fish.style.pointerEvents = "none";
  fish.style.zIndex = "50";
  fish.style.top = (Math.random() * 40 + 45) + "%";
  fish.style.left = "-100px";
  fish.style.filter = "drop-shadow(0 0 20px rgba(100, 200, 255, 0.7))";
  
  const duration = Math.random() * 8 + 10;
  fish.style.animation = `fishSwim ${duration}s linear`;
  
  scene.appendChild(fish);
  
  setTimeout(() => {
    fish.remove();
  }, duration * 1000);
}

const fishSwimStyle = document.createElement("style");
fishSwimStyle.textContent = `
  @keyframes fishSwim {
    0% {
      left: -100px;
      transform: translateY(0px) scaleX(1);
    }
    50% {
      transform: translateY(-40px) scaleX(1);
    }
    100% {
      left: 110%;
      transform: translateY(0px) scaleX(1);
    }
  }
`;
document.head.appendChild(fishSwimStyle);

// Create swimming fish occasionally
setInterval(createSwimmingFish, 5000);

// Console message
console.log(`
  🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
  ☀️  BUONA ESTATE 2024  ☀️
  🏖️  Made with ❤️ in Italy  🏖️
  🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
`);

// Performance optimization: reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
  console.log("⚡ Optimizing performance for your device...");
  const particles = document.querySelectorAll(".floating-particle");
  particles.forEach((particle, index) => {
    if (index % 2 === 0) {
      particle.remove();
    }
  });
}