document.getElementById('kontakt-forma').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Hvala na poruci! Uskoro ćemo vam se javiti.');
    this.reset();
  });
  