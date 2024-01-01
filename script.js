document.body.addEventListener('click', function() {
    // Toggle a class to trigger the animation
    document.body.classList.toggle('animate-background');
  
    // Change the background color to a random color after the animation
    setTimeout(function() {
      var randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    }, 500); // Wait for 500ms (duration of the transition) before changing the color
  });
  // Function to change the background color at regular intervals
function changeBackgroundColor() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // Set an interval to change the background color every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundColor, 5000);