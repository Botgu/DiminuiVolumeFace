function setVolumeOnAllVideos(volume) {
  const videos = document.getElementsByTagName("video");
  for (var i = 0; i < videos.length; i++) {
    videos[i].volume = volume;
  }
}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      for (const addedNode of mutation.addedNodes) {
        if (addedNode.tagName === 'VIDEO') {
          setVolumeOnAllVideos(0.8);
        }
      }
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

setInterval(() => {
  const videos = document.querySelectorAll('video');
  for (const video of videos) {
    if (!video.dataset.processed) {
      setVolumeOnAllVideos(0.1);
      video.dataset.processed = true;
    }
  }
}, 500);
