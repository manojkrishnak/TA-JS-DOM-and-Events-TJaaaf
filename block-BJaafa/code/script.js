// On click on button it sends a message
let btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // This message is dummy and has no relevance
    let msg = {
      test: "hello",
    };
    // send tab id of the current tab 
    chrome.tabs.sendMessage(tabs[0].id, msg);
  });
});
