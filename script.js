document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
  
    document.querySelectorAll('svg path').forEach(path => {
      // Show popup on hover
      path.addEventListener('mouseenter', function (e) {
        popup.style.left = `${e.pageX + 5}px`;
        popup.style.top = `${e.pageY + 5}px`;
        popup.style.display = 'block';
        popup.textContent = this.getAttribute('name') || 'Region';
      });
  
      // Hide popup on mouse leave
      path.addEventListener('mouseleave', function () {
        popup.style.display = 'none';
      });
  
      // Handle path click (opens a URL if set)
      path.addEventListener('click', function () {
        const url = this.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  });
  
