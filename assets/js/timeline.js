document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.container').forEach(container => {
      container.addEventListener('click', function() {
        // Check if the clicked container is already expanded
        const isExpanded = this.classList.contains('expanded');
        
        // Close all containers
        document.querySelectorAll('.container').forEach(c => {
          c.classList.remove('expanded');
        });
        
        // If the clicked container wasn't expanded, expand it
        if (!isExpanded) {
          this.classList.add('expanded');
        }
      });
    });
  });