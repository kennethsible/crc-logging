import express from 'express';
import { readdir } from 'fs';

const app = express();
const directoryPath = 'public/markdown';
var serverPort = 8080;
if (process.argv.length >= 4 && process.argv[2] == '--port') {
  var serverPort = process.argv[3];
}

app.get('/api/getFiles', (req, res) => {
  readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`[${new Date().toLocaleTimeString()}] `, err);
      res.status(500).json({error: 'cannot read ' + directoryPath});
    } else {
      res.json({files});
    }
  });
});

app.use(express.static('public'));

app.listen(serverPort, () => {
  console.log(`[${new Date().toLocaleTimeString()}] http://localhost:${serverPort}/`);
});
