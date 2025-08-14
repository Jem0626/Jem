// Floating hearts, tulips, and roses function
function createEmoji() {
  const container = document.getElementById("hearts-container");
  const emoji = document.createElement("span");

  const symbols = ["❤️", "🌹", "🌷"];
  emoji.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  
  emoji.classList.add("heart-floating");
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = Math.random() * 20 + 15 + "px";
  emoji.style.animationDuration = Math.random() * 3 + 4 + "s";

  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 7000);
}

// Show hearts/tulips/roses & play music
document.getElementById("showHeartButton").addEventListener("click", function() {
  setInterval(createEmoji, 200);

  document.getElementById("heart").style.display = "block";

  const musicPlayer = document.getElementById("musicPlayer");
  musicPlayer.innerHTML = `
    <iframe width="0" height="0"
      src="https://www.youtube.com/embed/5fAOjcJc_M8?autoplay=1&loop=1&playlist=5fAOjcJc_M8"
      frameborder="0"
      allow="autoplay; encrypted-media">
    </iframe>
  `;
});

// Typing effect function
function typeMessage(elementId, text, speed = 50, callback = null) {
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

// Messages text
const messages = {
  message1: "Even if we’re miles apart, my heart feels like you’re right here beside me. Every day, I carry your smile, your laugh, and your love with me, like a little piece of home I can hold onto. Distance may keep us from holding hands, but it can’t stop me from loving you more each day. One day soon, the space between us will disappear, and I’ll finally get to tell you in person how much you mean to me. Until then, remember you’re my first thought in the morning, my last thought at night, and my favorite dream in between.",
  message2: "Every message from you feels like a hug I can’t let go of a gentle reminder that no matter how far we are, your love still reaches me. I miss you in ways words could never fully capture. Sometimes it’s in the quiet moments when I wish I could hear your laugh, other times it’s in the middle of the day when I catch myself imagining your hand in mine. The distance between us may be wide, but my heart only beats for you, and with every beat, my love grows stronger. I’ll keep loving you harder with each passing day, holding onto the promise that one day, the space between us will vanish, and this distance will be nothing more than a memory we overcame together. Until then, I’ll keep you in my thoughts, my prayers, and my every dream."
};

// Start typing the first message automatically
typeMessage("message1", messages.message1);

// Slide to next message with typing
document.getElementById("nextMessageButton").addEventListener("click", function() {
  const currentMessage = document.getElementById("message1");
  const nextMessage = document.getElementById("message2");

  currentMessage.style.display = "none";
  nextMessage.style.display = "block";
  nextMessage.style.transform = "translateY(100px)";

  setTimeout(() => {
    nextMessage.style.transform = "translateY(0px)";
    typeMessage("message2", messages.message2);
  }, 10);
});

// Fade-in Pictures when button clicked
document.getElementById("picturesBtn").addEventListener("click", function() {
  let picturesPage = document.getElementById("picturesPage");

  picturesPage.style.display = "block";
  picturesPage.classList.remove("fade-in");
  void picturesPage.offsetWidth; // force browser reflow
  picturesPage.classList.add("fade-in");
});
