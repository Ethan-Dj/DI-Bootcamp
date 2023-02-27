const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
  
    const formdata = new FormData(form); 
  
    fetch('/formdata', {
      method: 'POST',
      body: formdata
    })
})