document.addEventListener('DOMContentLoaded', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.dropbtn');
      const content = dropdown.querySelector('.dropdown-content');
  
      button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        e.stopPropagation(); // Prevent this click from being caught by the window listener
        content.classList.toggle('show');
      });
    });
  
    // Close dropdowns when clicking outside
    window.addEventListener('click', () => {
      const openDropdowns = document.querySelectorAll('.dropdown-content.show');
      openDropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    });
  });