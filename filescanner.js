import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://www.virustotal.com/vtapi/v2/file/scan',
  headers: {accept: 'text/plain', 'content-type': 'application/json'},
  data: {apikey: '85f5e2f04ae45a7bed752aa3727378bc222a3fc63189b56497abdb8939fb0f82'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });