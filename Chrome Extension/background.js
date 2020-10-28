const isTinderTab = (tab) =>
  tab &&
  tab.url &&
  (tab.url.includes('https://tinder.com') ||
    tab.url.includes('https://www.tinder.com') ||
    tab.url.includes('http://tinder.com') ||
    tab.url.includes('http://www.tinder.com'));

const runApp = (tab) => {
  if (isTinderTab(tab) && localStorage.isStarted && localStorage.isStarted == 'true') {
    chrome.tabs.sendMessage(tab.id, { startSwiping: true });
  }
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete') runApp(tab);
});

// Reload Tinder.com if it exists before extension has been installed
// chrome.runtime.onInstalled.addListener((info) =>
//   chrome.tabs.query({ currentWindow: true }, (tabs) =>
//     tabs.forEach((tab) => {
//       if (isTinderTab(tab)) chrome.tabs.reload(tab.id, () => runApp(tab));
//     })
//   )
// );
