
  document.querySelectorAll('.layer').forEach(layer => {
    layer.addEventListener('click', () => {
      layer.classList.toggle('checked'); // toggle check on click
    });
  });
