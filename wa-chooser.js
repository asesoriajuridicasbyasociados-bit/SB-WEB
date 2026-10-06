(function () {
  var MSG = 'Hola, me gustaría hacer una consulta';
  var OPTS = [
    { name: 'Dr. Santiago Benítez', num: '5493764758540', show: '3764 758540' },
    { name: 'Dr. Jonatan Suárez', num: '5493764723681', show: '3764 723681' }
  ];
  var ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0 0 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 1 1 6.98 3.86zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z"/></svg>';
  var modal;

  function build() {
    modal = document.createElement('div');
    modal.className = 'wa-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Elegí con quién querés hablar');
    var items = OPTS.map(function (o) {
      var url = 'https://wa.me/' + o.num + '?text=' + encodeURIComponent(MSG);
      return '<a class="wa-opt" href="' + url + '" target="_blank" rel="noopener">' + ICON +
        '<span><b>' + o.name + '</b><small>' + o.show + '</small></span></a>';
    }).join('');
    modal.innerHTML = '<div class="wa-box"><button class="wa-close" type="button" aria-label="Cerrar">&times;</button>' +
      '<p class="wa-kicker">Consulta sin compromiso</p><h3>¿Con quién querés hablar?</h3>' + items + '</div>';
    document.body.appendChild(modal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.closest('.wa-close') || e.target.closest('.wa-opt')) close();
    });
  }
  function open() { if (!modal) build(); modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { if (modal) modal.classList.remove('open'); document.body.style.overflow = ''; }

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="wa.me/5493764758540"]');
    if (!a || a.closest('.wa-modal')) return;
    if (/^[\d\s]+$/.test(a.textContent.trim())) return; // enlaces que muestran un número puntual
    e.preventDefault();
    open();
  });
})();
