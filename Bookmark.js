javascript:(function() {
  var links = [
    { text: 'Games', url: 'https://example.com/games' },
    { text: 'Proxies', url: 'https://support-studentvue1.b4a.run/~' },
    { text: 'Hacks', url: 'https://example.com/hacks' }
  ];

  var openInNewTab = function(url) {
    var newTab = window.open('about:blank', '_blank');
    newTab.location.href = url;
  };

  var overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    backdrop-filter: blur(5px);
  `;

  var sidebar = document.createElement('div');
  sidebar.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Buttons on the left */
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: #333;
    color: #fff;
    font-family: Arial, sans-serif;
    padding: 20px;
    border-radius: 10px;
  `;

  var createButton = function(text, url) {
    var button = document.createElement('button');
    button.textContent = text;
    button.style.cssText = `
      display: block;
      color: #fff;
      background-color: #4a90e2;
      border: none;
      border-radius: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      padding: 10px;
      text-align: left; /* Align text to the left */
      width: 100%;
      font-size: 16px;
    `;
    button.addEventListener('click', function() {
      openInNewTab(url);
    });
    return button;
  };

  links.forEach(function(link) {
    var button = createButton(link.text, link.url);
    sidebar.appendChild(button);
  });

  overlay.appendChild(sidebar);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  document.body.appendChild(overlay);
})();
