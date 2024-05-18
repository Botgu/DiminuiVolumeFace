chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes('facebook.com')) {
        chrome.tabs.sendMessage(tabId, { type: 'diminuirVolume' });
    }
});
