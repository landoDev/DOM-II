// Event count 4
// ===== Event Logs
window.addEventListener('load', (event) => {
    console.log('Welcome to the Console')
    console.log('Status: Page has loaded');
  });
// ===== nav hover using mouseover
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach( element => {
    element.addEventListener('mouseover', () => {
        element.style.color = '#FFD700'
        setTimeout(function() {
            element.style.color = "";
          }, 500);
        }, false);
});

// ===== Resized Header Photo
const pageImg = document.getElementsByTagName('img');
let headerImg = pageImg[0];
window.addEventListener("resize", () => {
    headerImg.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
});

// ===== Enlarge buttons when hovered
const signUp = document.querySelectorAll(".btn")
signUp.forEach( button => {
    button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.2)";
    button.style.transition = "transform 1s";
  })
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  })
});

// ===== Double click to change images
let letsGoImg = pageImg[1];
letsGoImg.addEventListener('dblclick', () => {
    letsGoImg.src = "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
});
let adventureImg = pageImg[2];
adventureImg.addEventListener('dblclick', () => {
    adventureImg.src = "https://images.unsplash.com/photo-1559696196-95a3fd905f23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
});
let destinationImg = pageImg[3];
destinationImg.addEventListener('dblclick', () => {
    destinationImg.src = "https://images.unsplash.com/photo-1542704463-c000c2c4ea0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
});

// ===== Click to change section title color
