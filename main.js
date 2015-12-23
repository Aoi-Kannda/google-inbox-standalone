chrome.app.runtime.onLaunched.addListener(function() {
  var windowOptions = {
    outerBounds: {
      width: Math.round(screen.width * 0.75),
      height: Math.round(screen.height * 0.75)
    }
  };

  chrome.app.window.create('app.html', windowOptions);
});
