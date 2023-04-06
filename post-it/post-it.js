(function() {
    var postIt = document.getElementById('postIt');
    var afficheBtn = document.getElementById('afficheBtn');
    var cacheBtn = document.getElementById('cacheBtn');
    var message1 = "Vous avez cliqué sur le bouton 'Affiche' !";
    var message2 = "C'est gentil de me survoler...";
    
    afficheBtn.addEventListener('click', function() {
      postIt.style.visibility = 'visible';
      postIt.innerHTML = message1;
    });
    
    cacheBtn.addEventListener('click', function() {
      postIt.style.visibility = 'hidden';
    });
    
    postIt.addEventListener('mouseover', function() {
      postIt.style.visibility = 'visible';
      postIt.innerHTML = message2;
    });
    
    postIt.addEventListener('mouseout', function() {
      postIt.style.visibility = 'hidden';
    });
  })();