
  let currentDate = new Date();

  
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; 
  let year = currentDate.getFullYear();

  
  let formatData = day + ' ' + '0' + month + ', ' + year;


  document.getElementById('date').textContent = formatData;

