document.getElementById('diminuirVolumeButton').addEventListener('click', () => {
  console.log('Option')
    chrome.runtime.sendMessage({ type: 'diminuirVolume' });
  });