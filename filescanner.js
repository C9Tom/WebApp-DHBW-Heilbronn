const options = {
    method: 'POST',
    headers: {accept: 'text/plain', 'content-type': 'application/json'},
    body: JSON.stringify({
      apikey: '85f5e2f04ae45a7bed752aa3727378bc222a3fc63189b56497abdb8939fb0f82',
      file: ''
    })
  };
  
  fetch('https://www.virustotal.com/vtapi/v2/file/scan', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));