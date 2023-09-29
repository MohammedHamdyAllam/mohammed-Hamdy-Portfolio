// include elements from html
let wifi = document.getElementById('wifi');
let reloadButton = document.getElementById('reload-button');

// window loading sripts
// online & offline script
if (window.navigator.onLine) {
  // nonething
} else {
  document.body.innerHTML = '';
  document.body.appendChild(wifi);
  wifi.style.display = 'flex';
}

// online & offline script
window.addEventListener('online', function () {
  window.location.reload();
});
window.addEventListener('offline', function () {
  document.body.innerHTML = '';
  document.body.appendChild(wifi);
  wifi.style.display = 'flex';
});

// reload button script
reloadButton.onclick = function () {
  reloadButton.style.display = 'none';
  loader.style.display = 'block';
  setTimeout(function(){
    window.location.reload();
  }, 1000)
};