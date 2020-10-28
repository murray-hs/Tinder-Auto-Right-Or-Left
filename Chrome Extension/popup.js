let tabId = null;

const setButtonDisabled = ($this, value) => $this.prop('disabled', value);

const startSwiping = () => {
  localStorage.isStarted = 'true';
  setButtonDisabled($('#startSwiping'), true);
  setButtonDisabled($('#stopSwiping'), false);
  chrome.tabs.sendMessage(tabId, { startSwiping: true });
};

const stopSwiping = () => {
  localStorage.isStarted = 'false';
  setButtonDisabled($('#stopSwiping'), true);
  setButtonDisabled($('#startSwiping'), false);
  chrome.tabs.sendMessage(tabId, { stopSwiping: true });
};

const runApp = (tab) => {
  console.log(tab);
  if (
    tab.url.includes('https://tinder.com') ||
    tab.url.includes('https://www.tinder.com') ||
    tab.url.includes('http://tinder.com') ||
    tab.url.includes('http://www.tinder.com')
  ) {
    tabId = tab.id; // Tab ID
    const isStarted = localStorage.isStarted ? localStorage.isStarted : 'false';
    const startStopButton = isStarted != 'false' ? $('#startSwiping') : $('#stopSwiping');
    setButtonDisabled(startStopButton, true);

    // Initial start
    if (isStarted != 'false') startSwiping();
  } else {
    $('.buttons').hide();
    $('.not-tinder').show();
  }
};

window.addEventListener('DOMContentLoaded', () =>
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => tabs.length && runApp(tabs[0]))
);

$(document).on('click', '#openTinder', () => chrome.tabs.create({ url: 'https://tinder.com', active: true }));
$(document).on('click', '#startSwiping', startSwiping);
$(document).on('click', '#stopSwiping', stopSwiping);
