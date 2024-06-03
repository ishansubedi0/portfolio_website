// Function to change background image on hover
function footerhover(event) {
    const elementsDiv = document.getElementById('elements');
    
    switch (event.target.id) {
      case 'facebook':
        elementsDiv.style.backgroundImage = "url('assets/footer_images/1.png')";
        break;
      case 'linkedin':
        elementsDiv.style.backgroundImage = "url('assets/footer_images/3.png')";
        break;
      case 'github':
        elementsDiv.style.backgroundImage = "url('assets/footer_images/5.png')";
        break;
      case 'instagram':
        elementsDiv.style.backgroundImage = "url('assets/footer_images/6.png')";
        break;
      case 'twitter':
        elementsDiv.style.backgroundImage = "url('assets/footer_images/x.png')";
        break;
      default:
        elementsDiv.style.backgroundImage = "";
    }
  }
  
  // Add event listeners to each link
  document.querySelectorAll('.footer_link').forEach(link => {
    link.addEventListener('mouseover', footerhover);
    link.addEventListener('mouseout', () => {
      document.getElementById('elements').style.backgroundImage = "";
    });
  });
  