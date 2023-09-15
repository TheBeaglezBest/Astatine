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

    var gamesLink = document.createElement('a');
  gamesLink.href = 'https://example.com/games'; 
  gamesLink.textContent = 'Games';
  gamesLink.style.display = 'block';
  gamesLink.style.color = '#4a90e2';
  gamesLink.style.marginBottom = '10px';
  gamesLink.style.textDecoration = 'none';
  gamesLink.style.fontSize = '16px';

  var proxiesLink = document.createElement('a');
  proxiesLink.href = 'https://example.com/proxies';  
  proxiesLink.textContent = 'Proxies';
  proxiesLink.style.display = 'block';
  proxiesLink.style.color = '#4a90e2'; 
  proxiesLink.style.marginBottom = '10px';
  proxiesLink.style.textDecoration = 'none';
  proxiesLink.style.fontSize = '16px';

  var hacksLink = document.createElement('a');
  hacksLink.href = 'https://example.com/hacks'; 
  hacksLink.textContent = 'Hacks';
  hacksLink.style.display = 'block';
  hacksLink.style.color = '#4a90e2'; 
  hacksLink.style.marginBottom = '10px';
  hacksLink.style.textDecoration = 'none';
  hacksLink.style.fontSize = '16px';

   sidebar.appendChild(gamesLink);
  sidebar.appendChild(proxiesLink);
  sidebar.appendChild(hacksLink);

    overlay.appendChild(sidebar);

   document.body.appendChild(overlay);
})();
