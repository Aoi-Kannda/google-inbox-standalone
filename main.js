chrome.app.runtime.onLaunched.addListener(function() {
  var windowOptions = {
    outerBounds: {
      width: Math.round(screen.width * 0.75),
      height: Math.round(screen.height * 0.75)
    }
  };

  chrome.app.window.create('app.html', windowOptions, function(win) {
    win.contentWindow.onload = function() {
      var webview = win.contentWindow.document.getElementById('app-view');
      webview.addEventListener('newwindow', function(e) {
        e.preventDefault();
        chrome.browser.openTab({url: e.targetUrl});
      });
    };
  });
});
