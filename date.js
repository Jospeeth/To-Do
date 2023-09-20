
  let fechaActual = new Date();

  
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1; 
  let año = fechaActual.getFullYear();

  
  let fechaFormateada = dia + ' ' + mes + ', ' + año;


  document.getElementById('date').textContent = fechaFormateada;

