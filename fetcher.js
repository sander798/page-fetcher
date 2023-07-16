const request = require('request');
const fs = require('fs');

process.argv.length === 4 ? null : process.exit(-1);

request(process.argv[2], (error, response, body) => {
  error ? console.log('error:', error) : null; // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML
  
  fs.writeFile(process.argv[3], body, err => {
    if (err) {
      console.error(err);
    }
    
    console.log("Downloaded and saved " + body.length + " bytes to " + process.argv[3]);
  });
});