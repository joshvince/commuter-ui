const express = require('express');
const path = require('path');
const app = express();
var http = require('http');

var port = process.env.PORT || 8081

app.use(express.static('./build'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

/*
This pings the heroku dyno hosting the backend app, to stop it from falling
asleep...

When this gets deployed properly, it can be removed. Yay AWS!
*/
setInterval(function(){
  return http.get(
    {
      host: 'choob-service.herokuapp.com',
      path: '/'
    }, function(response){
      var body = ''
      response.on('data', function(d){
        body += d
      });
      response.on('end', function(){
        return body
      })
    }
  )
},1800000)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});
