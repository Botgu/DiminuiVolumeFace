function setVolumeOnAllVideos(volume) {
  // Encontra todos os elementos de vídeo na página
  var videos = document.getElementsByTagName("video");
  console.log('rodou')
  // Define o volume de cada vídeo encontrado
  for (var i = 0; i < videos.length; i++) {
    videos[i].volume = volume;
    console.log("Volume", videos[i].volume);
  }
}

// Reduz o volume de todos os vídeos para 50%
setVolumeOnAllVideos(0.1);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "facebookOpened") {
    setVolumeOnAllVideos(0.1);
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "diminuirVolume") {
    setVolumeOnAllVideos(0.1);
  }
});

document
  .getElementById("diminuirVolumeButton")
  .addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "diminuirVolume" });
  });
