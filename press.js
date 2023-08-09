function loadScript(url) {
  const script = document.createElement("script");
  script.src = url;
  const firstScript = document.querySelector("script");
  firstScript.parentNode.insertBefore(script, firstScript);
}

loadScript("https://www.youtube.com/iframe_api");

function isMobileDevice() {
  const maxWidth = 767;
  return (
    window.innerWidth <= maxWidth ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
}

const playButtons = document.querySelectorAll(".youtube-poster-wrapper");

playButtons.forEach((button) => {
  button.addEventListener("click", playVideo);
});

function playVideo(e) {
  const buttonWrapper = e.target.closest(".youtube-poster-wrapper");
  const shouldMute = isMobileDevice();
  let muteState = 0;

  if (shouldMute) {
    muteState = 1;
  }

  const playerDiv = document.createElement("div");
  playerDiv.classList.add("youtube-poster-wrapper");
  const iframeDiv = document.createElement("div");
  playerDiv.appendChild(iframeDiv);

  const youtubeItem = e.target.closest(".youtube-item.w-dyn-item");
  youtubeItem.prepend(playerDiv);

  buttonWrapper.remove();

  const videoId = buttonWrapper.getAttribute("data-youtube-id");

  new YT.Player(iframeDiv, {
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      playsinline: 1,
      mute: muteState,
    },
  });
}
