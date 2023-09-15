javascript:(function() {
  var links = [
    { text: 'Games', url: 'https://example.com/games' },
    { text: 'Proxies', url: 'https://example.com/proxies' },
    { text: 'Hacks', url: 'https://example.com/hacks' }
  ];

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

  var iframeContainer = document.createElement('div');
  iframeContainer.style.cssText = `
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: #fff;
    border-radius: 10px;
    z-index: 10000;
  `;

  var iframe = document.createElement('iframe');
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
  `;

  var createButton = function(text, url) {
    var button = document.createElement('a');
    button.textContent = text;
    button.href = 'javascript:void(0)'; // Disable default link behavior
    button.style.cssText = `
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: left; /* Align text to the left */
      background-color: #4a90e2;
      border-radius: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      padding: 0 10px; /* Add some padding to the buttons */
    `;
    button.addEventListener('click', function() {
      sidebar.style.display = 'none';
      iframeContainer.style.display = 'block';
      iframe.src = url;
    });
    return button;
  };

  links.forEach(function(link) {
    var button = createButton(link.text, link.url);
    sidebar.appendChild(button);
  });

  iframeContainer.appendChild(iframe);
  overlay.appendChild(sidebar);
  overlay.appendChild(iframeContainer);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  document.body.appendChild(overlay);
})();
