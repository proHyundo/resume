// onscroll progress bar
const container = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');
var containerHeight;

window.onscroll = function(){
  containerHeight = container.offsetHeight - window.innerHeight;
  containerPos = container.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = diff / containerHeight * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  highlight.style.width = cssWidth + "%";
}

// popup
window.onload = function() {
  document.getElementById('popup-overlay').style.display = 'flex';
};

document.getElementById('popup-close').onclick = function() {
  document.getElementById('popup-overlay').style.display = 'none';
};

document.getElementById('popup-ok').onclick = function() {
  document.getElementById('popup-overlay').style.display = 'none';
};