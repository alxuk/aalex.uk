document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

function getFont(changeFont) {
  const fontBtn = document.getElementById('font-btn');
  let savedFont = localStorage.getItem('font') || 'Hack';

  if (changeFont) {
    savedFont = savedFont === 'Roboto' ? 'Hack' : 'Roboto';
    localStorage.setItem('font', savedFont);
  }

  document.body.classList.toggle('roboto-font', savedFont === 'Roboto');
  document.body.classList.toggle('hack-font', savedFont === 'Hack');

  fontBtn.textContent = savedFont === 'Roboto' ? 'Hack' : 'Roboto';
}

window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('email');
  if (!el) return;
  const encoded = el.dataset.enc;
  const email = String.fromCharCode(...encoded.split(',').map(n => parseInt(n, 10)));
  el.href = 'mailto:' + email;
  el.textContent = email;
});