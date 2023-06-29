> [#] - App.js-----------------------------------
> |- The following below gives an example of how
> |- the Process is supposed to be handled and
> |- how to view specific properties of the 
> |- server request body.

``` js
const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // Exits the Event Loop
});



```


> [#] - What does Parsing Request Bodies
> |- The Buffer = a bus stop that stops and gets data.