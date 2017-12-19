// @flow
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PythonShell = require('python-shell');

const pyshell = new PythonShell('script.py');

const port = 8081;

const app = express();

app.use(cors({ origin: ['http://localhost:8080'] }));
app.use(bodyParser.json());

app.post('/api/python', (req, res) => {
  pyshell.send(req.body.src);
  pyshell.on('message', message => {
    res.status(200).send(message);
    pyshell.end(err => {
      if (err) {
        throw err;
      }

      console.log('finished');
    });
  });

  res.status(200).send(`Test ${req.body.src}`);
});

console.log(`listening on ${port}`);
app.listen(port);
