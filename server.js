const express = require('express');
const path = require('path');
const app = express();

var port = process.env.PORT || 8081

app.use(express.static('./build'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});
