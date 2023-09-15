javascript:(function() {
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlay.style.zIndex = '9999';

  var sidebar = document.createElement('div');
  sidebar.style.width = '300px';
  sidebar.style.height = '100%';
  sidebar.style.backgroundColor = '#333'; 
  sidebar.style.color = '#fff'; 
  sidebar.style.fontFamily = 'Arial, sans-serif';
  sidebar.style.padding = '20px';

  var createRectangularButton = function(text, link) {
    var button = document.createElement('a');
    button.href = link;
    button.textContent = text;
    button.style.display = 'block';
    button.style.color = '#fff';
    button.style.marginBottom = '10px';
    button.style.textDecoration = 'none';
    button.style.fontSize = '16px';
    button.style.width = '100%'; 
    button.style.height = '50px'; 
    button.style.lineHeight = '50px'; 
    button.style.textAlign = 'center';
    button.style.backgroundColor = '#4a90e2'; 
    button.style.borderRadius = '10px'; 
    button.style.cursor = 'pointer';
    return button;
  };

  var gamesButton = createRectangularButton('Games', 'https://example.com/games');
  var proxiesButton = createRectangularButton('Proxies', 'https://example.com/proxies');
  var hacksButton = createRectangularButton('Hacks', 'https://example.com/hacks');

  sidebar.appendChild(gamesButton);
  sidebar.appendChild(proxiesButton);
  sidebar.appendChild(hacksButton);

  overlay.appendChild(sidebar);

  document.body.appendChild(overlay);
})();
