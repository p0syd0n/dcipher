const dcipher = require('dcipher');
const express = require('express');

const app = express();

dcipher('21232f297a57a5a743894a0e4a801fc3').then(plaintext => {
    console.log(plaintext);
    //=> 'admin'
});

dcipher('8843d7f92416211de9ebb963ff4ce28125932878').then(plaintext => {
    console.log(plaintext);
    //=> 'foobar'
});

dcipher('0d38a29a727a8f0c87cd8918585260f59a34da92003810484a3a2105214b2c0e').then(plaintext => {
    console.log(plaintext + ' lol');
    //=> 'idk'
});

app.get('/', (req, res) => {
  if (req.query.ciphertext) {
    dcipher(req.query.ciphertext).then(plaintext => {
      if (plaintext != "Hash could not be deciphered") {
        res.send(plaintext);
      } else {
        res.sendStatus(418);
      }
      
    });
  
  } else {
    res.sendStatus(400);
  }
})

app.listen(port=3000)
