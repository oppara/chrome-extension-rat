'use strict';

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.query({currentWindow: true}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.url.indexOf('chrome://') === 0) {
        return;
      }

      console.log('reload: ' + tab.title);
      chrome.tabs.reload(tab.id, {'bypassCache': true});
    });
  });
});
