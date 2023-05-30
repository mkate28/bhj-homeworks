const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(tip => {
   tip.insertAdjacentHTML('afterEnd', '<div class="tooltip"></div>');
   tip.addEventListener('click', function(event) {
      event.preventDefault();
      const {left, bottom} = tip.getBoundingClientRect();
      const tool = tip.nextElementSibling;
      tool.style.top = `${bottom}px`;
      tool.style.left = `${left}px`;
      tool.textContent = tip.getAttribute('title');
     
      if (tool.classList.contains('tooltip_active')) {
         tool.classList.remove('tooltip_active')
      } else {
         tool.classList.add('tooltip_active')
      }     
   })
})