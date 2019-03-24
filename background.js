'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab){
      if (tab.url.indexOf('chrome://') === 0) {
        return;
      }

      console.log('reload: ' + tab.title);
      chrome.tabs.reload(tab.id, {'bypassCache': true});
    });
  });
});
