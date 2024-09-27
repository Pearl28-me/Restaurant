document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const confirmationMessage = document.getElementById('confirmation-message');
    
    if (name) {
      confirmationMessage.textContent = `Thank you, ${name}! Your reservation has been received.`;
    }
  });
  