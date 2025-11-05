// Simple partials loader. Requires running over http(s) due to fetch.
(function loadPartials() {
  var containers = document.querySelectorAll('[data-include]');
  containers.forEach(function (el) {
    var url = el.getAttribute('data-include');
    fetch(url)
      .then(function (res) { return res.text(); })
      .then(function (html) {
        el.innerHTML = html;
        try {
          if (window.bootstrap && typeof window.bootstrap.Tooltip === 'function') {
            var tooltipTriggerList = [].slice.call(el.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.forEach(function (tooltipTriggerEl) { new window.bootstrap.Tooltip(tooltipTriggerEl); });
          }
        } catch (e) { }
      })
      .catch(function () { /* no-op */ });
  });
})();


