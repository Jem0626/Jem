// Function to show heart when button is clicked
document.getElementById("showHeartButton").addEventListener("click", function() {
  var heart = document.getElementById("heart");
  heart.style.display = "block";
  
  // Play music
  var musicPlayer = document.getElementById("musicPlayer");
  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/908773h7OAM?autoplay=1";
  iframe.frameborder = "0";
  iframe.allow = "autoplay";
  musicPlayer.appendChild(iframe);
});

// Function to slide to the next sweet message
document.getElementById("nextMessageButton").addEventListener("click", function() {
  var currentMessage = document.getElementById("message1");
  var nextMessage = document.getElementById("message2");

  currentMessage.style.display = "none";  // Hide the current message
  nextMessage.style.display = "block";  // Show the next message

  // Apply sliding effect
  nextMessage.style.transform = "translateY(100px)";  // Start position
  setTimeout(function() {
    nextMessage.style.transform = "translateY(0px)";  // End position (slide up)
  }, 10);
});
