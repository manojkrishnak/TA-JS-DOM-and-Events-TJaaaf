chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//remove side suggestion videos and comments for a video
  let sideSuggestions = document.getElementById("secondary");
  sideSuggestions.remove();
  let comments = document.getElementById("sections");
  comments.remove();
//Put the video player in theater mode 
  let collection = document.getElementsByClassName("ytp-size-button");
  let button = collection.item(0);
  button.click();
});
