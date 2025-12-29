console.log("🌊 Summer animation loaded! Scroll down to explore the ocean! 🏖️")

const scene = document.querySelector(".summer-scene")
const summerElements = ["🐚", "⭐", "🌊", "☀️", "🦀", "🐠", "🍹", "🥥", "🌺", "🪼", "🐡", "⚓"]

// Generate floating particles
for (let i = 0; i < 100; i++) {
  const particle = document.createElement("div")
  particle.className = "floating-particle"
  particle.style.position = "absolute"
  particle.style.pointerEvents = "none"
  particle.style.zIndex = "20"
  particle.style.fontSize = Math.random() * 20 + 20 + "px"
  particle.textContent = summerElements[Math.floor(Math.random() * summerElements.length)]
  particle.style.left = Math.random() * 100 + "%"
  particle.style.top = Math.random() * 100 + "%"
  particle.style.opacity = Math.random() * 0.3 + 0.2
  particle.style.animation = `particleFloat ${Math.random() * 15 + 10}s ease-in-out infinite`
  particle.style.animationDelay = Math.random() * 5 + "s"

  scene.appendChild(particle)
}

// Add particle animation to stylesheet
const style = document.createElement("style")
style.textContent = `
  @keyframes particleFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(30px, -50px) rotate(90deg);
    }
    50% {
      transform: translate(-20px, -100px) rotate(180deg);
    }
    75% {
      transform: translate(40px, -50px) rotate(270deg);
    }
  }
  
  .floating-particle {
    will-change: transform;
  }
`
document.head.appendChild(style)

// Smooth parallax scrolling effect
let ticking = false

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset

      // Parallax for sun (moves slower)
      const sun = document.querySelector(".sun")
      if (sun) {
        sun.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`
      }

      // Parallax for clouds (medium speed)
      const clouds = document.querySelectorAll(".cloud")
      clouds.forEach((cloud, index) => {
        cloud.style.transform = `translateY(${scrolled * 0.4}px) translateX(${scrolled * 0.1 * (index + 1)}px)`
      })

      // Parallax for boats (faster)
      const boats = document.querySelectorAll(".boat")
      boats.forEach((boat) => {
        boat.style.transform = `translateY(${scrolled * 0.15}px) rotate(${Math.sin(scrolled * 0.01) * 5}deg)`
      })

      ticking = false
    })

    ticking = true
  }
})

// Add bubbles in the underwater section
function createBubble() {
  const bubble = document.createElement("div")
  bubble.style.position = "absolute"
  bubble.style.left = Math.random() * 100 + "%"
  bubble.style.bottom = "0%"
  bubble.style.width = Math.random() * 30 + 10 + "px"
  bubble.style.height = bubble.style.width
  bubble.style.background = "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5), rgba(100, 200, 255, 0.3))"
  bubble.style.borderRadius = "50%"
  bubble.style.pointerEvents = "none"
  bubble.style.zIndex = "25"
  bubble.style.animation = `bubbleRise ${Math.random() * 8 + 5}s linear`

  scene.appendChild(bubble)

  setTimeout(() => {
    bubble.remove()
  }, 13000)
}

// Add bubble animation
const bubbleStyle = document.createElement("style")
bubbleStyle.textContent = `
  @keyframes bubbleRise {
    0% {
      bottom: 0%;
      opacity: 0;
    }
    10% {
      opacity: 0.7;
    }
    90% {
      opacity: 0.7;
    }
    100% {
      bottom: 100%;
      opacity: 0;
      transform: translateX(${Math.random() * 100 - 50}px);
    }
  }
`
document.head.appendChild(bubbleStyle)

// Create bubbles periodically
setInterval(createBubble, 500)
