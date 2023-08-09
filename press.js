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

function initializeVideoButtons() {
  const playButtons = document.querySelectorAll(".youtube-poster-wrapper");
  playButtons.forEach((button) => {
    button.addEventListener("click", playVideoOnClick);
  });
}

function playVideoOnClick(e) {
  const buttonWrapper = e.target.closest(".youtube-poster-wrapper");
  const shouldMute = isMobileDevice();
  const muteState = shouldMute ? 1 : 0;

  const youtubeItem = e.target.closest(".youtube-item.w-dyn-item");
  const iframeDiv = document.createElement("div");
  iframeDiv.classList.add("youtube-poster-wrapper");
  youtubeItem.prepend(iframeDiv);

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

initializeVideoButtons();
