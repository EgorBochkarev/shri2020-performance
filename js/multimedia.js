(function(w, d, n) {
    var s = d.createElement('script');
    s.src = '//yastatic.net/s3/zen-lib/widget-loader/widget-loader.ver_2.js';
    d.head.appendChild(s);
    var c = d.createElement('div');
    c.style.display = 'none';
    d.body.appendChild(c);
    w[n] = w[n] || [];
    w[n].push(function() {
     w.YandexZen.renderWidget({
      container: c,
      clid: [123,123],
     });
    })
})(window, document, 'yandexZenAsyncCallbacks')