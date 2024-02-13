
  let currentDate = new Date();

  
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; 
  let year = currentDate.getFullYear();

  
 export let formatData = year + '-' + '0' + month + '-' +day ;


  document.getElementById('date').textContent = formatData;

